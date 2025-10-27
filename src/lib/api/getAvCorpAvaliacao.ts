import axios from 'axios';
import { cache } from 'react';

import { API_URL } from '@/config/app';
import { ApiAvCorpAvaliacaoProps } from '@/types';

import { getApiClientAccessToken } from './accessToken';

interface Params {
  avaliacaoId: string;
}

export const getAvCorpAvaliacao = cache(async ({ avaliacaoId }: Params) => {
  const accessToken = await getApiClientAccessToken();

  try {
    const response = await axios.get(
      `${API_URL}/trial/avcorp/canvas360/avaliacao/${avaliacaoId}`,
      {
        params: {
          with: 'resultado,analise',
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return response.data as unknown as ApiAvCorpAvaliacaoProps;
  } catch (error) {
    console.error(error);

    return null;
  }
});
