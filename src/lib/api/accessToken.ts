'use server';

import axios from 'axios';
import * as jose from 'jose';

import {
  API_CLIENT_ID,
  API_CLIENT_SECRET,
  API_URL,
  REDIS_API_TOKEN_KEY as REDIS_KEY,
  USER_AGENT,
} from '@/config/app';
import { AuthError } from '@/errors';
import { redis } from '@/services';

export async function getApiClientAccessToken(): Promise<string> {
  const cachedToken = await redis.get(REDIS_KEY);

  if (cachedToken) {
    if (isTokenExpired(cachedToken)) {
      const { accessToken, expiresIn } = await createNewToken();

      await redis.set(REDIS_KEY, accessToken, 'EX', expiresIn);

      return accessToken;
    }
  }

  const { accessToken, expiresIn } = await createNewToken();

  await redis.set(REDIS_KEY, accessToken, 'EX', expiresIn);

  return accessToken;
}

function isTokenExpired(token: string) {
  try {
    const decoded = jose.decodeJwt(token);

    if (!decoded.exp) return true;

    const now = Math.floor(Date.now() / 1000);
    return decoded.exp < now; // true = expirado, false = válido
  } catch (err) {
    console.error('Error decoding JWT:', err);
    return true; // se não conseguir decodificar, considera inválido
  }
}

type JwtProps = {
  accessToken: string;
  expiresIn: number;
};

async function createNewToken(): Promise<JwtProps> {
  const endpoint = `${API_URL}/oauth/token`;

  try {
    const response = axios({
      method: 'post',
      url: endpoint,
      data: {
        grant_type: 'client_credentials',
        client_id: API_CLIENT_ID,
        client_secret: API_CLIENT_SECRET,
      },
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': USER_AGENT,
      },
    });

    const responseJson = (await response).data;

    return {
      accessToken: responseJson.access_token,
      expiresIn: responseJson.expires_in,
    };
  } catch (err) {
    console.log('Erro ao tentar gerar AccessToken', err);
    throw new AuthError('Falha ao obter token de acesso da API externa');
  }
}
