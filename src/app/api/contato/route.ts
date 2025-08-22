import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';
import path from 'path';

const templatePath = getTemplatePath('contato.hbs');
const source = fs.readFileSync(templatePath, 'utf8');
const template = handlebars.compile(source);

type EnvelopeProps = {
  nome: string;
  empresa: string | null;
  email: string;
  whatsapp: string | null;
  mensagem: string;
};

export async function POST(req: Request) {
  const data = (await req.json()) as unknown as EnvelopeProps;

  const html = template(data);

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
    // Produção (após build)
    path.join(
      process.cwd(),
      '.next',
      'resources',
      'email-templates',
      templateName,
    ),
    // Desenvolvimento
    path.join(
      process.cwd(),
      'src',
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
