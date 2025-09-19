import axios from 'axios';
import { cache } from 'react';

import { API_URL } from '@/config/app';
import { ApiTesteDiscUsuario } from '@/types';

import { getApiClientAccessToken } from './accessToken';

interface Params {
  inscricaoId: string;
  usuarioId: string;
}

export const getTesteDiscUsuario = cache(
  async ({ inscricaoId, usuarioId }: Params) => {
    const accessToken = await getApiClientAccessToken();

    const response = await axios.get(
      `${API_URL}/trial/disc/${inscricaoId}/usuario/${usuarioId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return response.data as unknown as ApiTesteDiscUsuario;
  },
);
