import axios from 'axios';
import crypto from 'crypto';
import { add } from 'date-fns';
import { NextResponse } from 'next/server';

import { API_URL, USER_AGENT } from '@/config/app';
import { getApiClientAccessToken } from '@/lib/api/accessToken';
import { HttpStatus } from '@/lib/consts';
import { getErrorMessage } from '@/lib/helpers';
import { redis } from '@/services';

type UserCredentials = {
  testeId: string;
  username: string;
  password: string;
};

type UserCredentialsResponseProps = {
  sessionId: string;
};

export async function POST(request: Request) {
  const json = (await request.json()) as UserCredentials;

  const { username, password, testeId } = json;

  try {
    const { sessionId } = await createUserSessionId({
      username,
      password,
      testeId,
    });

    const nextResponse = NextResponse.json(
      { message: 'Usuário autenticado com sucesso.' },
      { status: HttpStatus.OK },
    );

    nextResponse.cookies.set({
      name: '__bg_userId',
      value: sessionId,
      secure: true,
      httpOnly: false,
      sameSite: 'strict',
      expires: add(new Date(), { seconds: 60 * 60 * 24 * 14 }),
      path: '/',
    });

    return nextResponse;
  } catch (err) {
    return Response.json(
      { message: getErrorMessage(err) },
      { status: HttpStatus.INTERNAL_SERVER_ERROR },
    );
  }
}

async function createUserSessionId({
  username,
  password,
  testeId,
}: UserCredentials): Promise<UserCredentialsResponseProps> {
  try {
    const accessToken = await getApiClientAccessToken();

    const response = await axios({
      method: 'post',
      url: `${API_URL}/trial/disc/validar-credenciais`,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': USER_AGENT,
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        email: username,
        senha: password,
        testeId,
      },
    });

    if (response.status === 200) {
      const sessionId = crypto.randomBytes(16).toString('hex');
      await redis.set(sessionId, testeId, 'EX', 60 * 60 * 24 * 14); // 14 days

      return {
        sessionId,
      };
    }

    throw new Error('Erro desconhecido.');
  } catch (err) {
    console.error(err);
    throw new Error(
      'Erro de autenticação. Verifique as credenciais e tente novamente.',
    );
  }

  /*
  const response = await axios({
    method: 'post',
    url: `${app.apiUrl}/oauth/token`,
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Compass Authorization',
    },
    data: {
      grant_type: 'password',
      client_id: app.clientId,
      client_secret: app.clientSecret,
      username,
      password,
    },
  });

  const {
    access_token: accessToken,
    expires_in: expiresIn,
    usuario,
  } = await response.data;

  const sessionId = crypto.randomBytes(32).toString('hex');

  await redis.set(sessionId, accessToken, 'EX', expiresIn);

  const usuarioInfo = {
    id: usuario.id,
    nome: usuario.nome,
    nome_completo: usuario.nome_completo,
    email: usuario.email,
    avatarUrl: usuario.avatar_url || null,
    empresa: usuario.empresa
      ? {
          id: usuario.empresa.id,
          nome: usuario.empresa.nome,
          logotipoUrl: usuario.empresa.logotipo_url || null,
          colaboradorId: usuario.empresa.colaborador_id,
        }
      : null,
  };

  return { sessionId, accessToken, expiresIn, usuario: usuarioInfo };
  */
}
