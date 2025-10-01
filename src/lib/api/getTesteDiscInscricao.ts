import axios from 'axios';

import { API_URL } from '@/config/app';
import { ApiTesteDiscInscricao } from '@/types';

import { getApiClientAccessToken } from './accessToken';

type Relations = 'usuarios' | 'tipo';

interface Params {
  id: string;
  relations?: Relations[];
}

export async function getTesteDiscInscricao({ id, relations }: Params) {
  const accessToken = await getApiClientAccessToken();

  const response = await axios.get(`${API_URL}/trial/disc/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      relations,
    },
  });

  return response.data as unknown as ApiTesteDiscInscricao;
}
