import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';
import path from 'path';

import { assuntosContato } from '@/data';
import { HttpStatus } from '@/lib/consts';

const templatePath = getTemplatePath('contato.hbs');
const source = fs.readFileSync(templatePath, 'utf8');
const template = handlebars.compile(source);

type EnvelopeProps = {
  nome: string;
  empresa: string | null;
  email: string;
  whatsapp: string | null;
  municipio?: string | null;
  uf?: string | null;
  assunto?: string | null;
  mensagem: string;
  token?: string;
};

type VerifyTokenResponse = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
};

export async function POST(req: Request) {
  const data = (await req.json()) as unknown as EnvelopeProps;

  console.log({ templatePath });

  const assunto =
    assuntosContato.find((a) => a.slug === data.assunto)?.descricao ||
    data.assunto;

  const { token } = data;

  if (!token || token === '') {
    return Response.json(
      { message: 'Token de reCAPTCHA ausente ou inválido.' },
      { status: HttpStatus.BAD_REQUEST },
    );
  }

  const result = await verifyToken(token);

  if (!result.success) {
    return Response.json(
      {
        message:
          'Não foi possível validar o token de reCAPTCHA. Por favor, tente novamente.',
      },
      { status: HttpStatus.BAD_REQUEST },
    );
  }

  if (result.score < 0.5) {
    return Response.json(
      {
        message:
          'Falha na verificação de segurança. Por favor, atualize a página e tente novamente.',
      },
      { status: HttpStatus.BAD_REQUEST },
    );
  }

  console.log({ assunto, assuntosContato });

  const html = template({
    ...data,
    assunto,
  });

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_TLS === 'true',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  } as SMTPTransport.Options);

  await transporter.sendMail({
    from: `Site Bússola da Gestão <${process.env.MAIL_FROM_ADDRESS}>`,
    to: process.env.MAIL_CONTACT_ADDRESS,
    subject: 'Novo contato do site',
    html,
  });

  return new Response('OK', { status: 200 });
}

function getTemplatePath(templateName: string): string {
  const possiblePaths = [
    // Desenvolvimento
    path.join(
      process.cwd(),
      'src',
      'resources',
      'email-templates',
      templateName,
    ),
    // Produção (após build)
    path.join(
      process.cwd(),
      '.next',
      'resources',
      'email-templates',
      templateName,
    ),
    // Fallback para public (se você mover para lá)
    path.join(process.cwd(), 'public', 'email-templates', templateName),
  ];

  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  throw new Error(
    `Template ${templateName} não encontrado em nenhum dos caminhos: ${possiblePaths.join(', ')}`,
  );
}

async function verifyToken(token: string): Promise<VerifyTokenResponse> {
  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY || '';

  const verifyTokenUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${token}`;

  const response = await fetch(verifyTokenUrl);

  const data = (await response.json()) as VerifyTokenResponse;

  return data;
}
