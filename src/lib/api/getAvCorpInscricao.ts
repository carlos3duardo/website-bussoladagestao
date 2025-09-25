import axios from 'axios';
import { cache } from 'react';

import { API_URL } from '@/config/app';
import { ApiAvCorpInscricao } from '@/types';

import { getApiClientAccessToken } from './accessToken';

interface Params {
  id: string;
  relationships?: string[];
}

export const getAvCorpInscricao = cache(
  async ({ id, relationships = [] }: Params) => {
    const accessToken = await getApiClientAccessToken();

    const response = await axios.get(
      `${API_URL}/trial/avcorp/canvas360/inscricao/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          with: relationships.join(','),
        },
      },
    );

    return response.data as unknown as ApiAvCorpInscricao;
  },
);
