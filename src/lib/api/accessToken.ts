'use server';

import axios from 'axios';

import {
  API_CLIENT_ID,
  API_CLIENT_SECRET,
  API_URL,
  REDIS_API_TOKEN_KEY as REDIS_KEY,
} from '@/config/app';
import { AuthError } from '@/errors';
import { redis } from '@/services';

export async function getApiClientAccessToken(): Promise<string> {
  const cachedToken = await redis.get(REDIS_KEY);

  if (cachedToken) {
    return cachedToken;
  }

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
        'User-Agent': 'Site Bússola da Gestão',
      },
    });

    const responseJson = (await response).data;

    const { access_token: accessToken, expires_in: expiresIn } = responseJson;

    await redis.set(REDIS_KEY, accessToken, 'EX', expiresIn);

    return accessToken;
  } catch (err) {
    console.log('Erro ao tentar gerar AccessToken', err);
    throw new AuthError('Falha ao obter token de acesso da API externa');
  }
}
