import axios from 'axios';
import { cache } from 'react';

import { API_URL } from '@/config/app';
import { ApiAvCorpCanvas360Questionario } from '@/types';

import { getApiClientAccessToken } from './accessToken';

interface Params {
  avaliacaoId: string;
}

export const getAvCorpQuestionario = cache(async ({ avaliacaoId }: Params) => {
  const accessToken = await getApiClientAccessToken();

  const response = await axios.get(
    `${API_URL}/trial/avcorp/canvas360/avaliacao/${avaliacaoId}/questionario`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return response.data as unknown as ApiAvCorpCanvas360Questionario;
});
