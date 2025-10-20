import axios from 'axios';
import { redirect } from 'next/navigation';

import { API_URL } from '@/config/app';
import { getApiClientAccessToken } from '@/lib/api';

interface PageProps {
  params: Promise<{
    inscricaoId: string;
    avaliacaoId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { avaliacaoId } = await params;

  const accessToken = await getApiClientAccessToken();

  const response = await axios({
    baseURL: API_URL,
    url: `/trial/avcorp/canvas360/avaliacao/${avaliacaoId}/relatorio`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 200 || response.status === 201) {
    const data = response.data.data;

    redirect(data.url);
  }

  redirect('/');
}
