import axios, { isAxiosError } from 'axios';

import { API_URL } from '@/config/app';
import { getApiClientAccessToken } from '@/lib/api/accessToken';
import { HttpStatus } from '@/lib/consts';

type RespostaProps = {
  inscricaoId: string;
  usuarioId: string;
  questaoId: number;
  opcaoId: number;
};

export async function POST(req: Request) {
  const resposta = (await req.json()) as unknown as RespostaProps;

  const { inscricaoId, usuarioId, questaoId, opcaoId } = resposta;

  try {
    const accessToken = await getApiClientAccessToken();

    axios({
      baseURL: API_URL,
      url: `/trial/disc/${inscricaoId}/usuario/${usuarioId}/responder`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        questao_id: questaoId,
        opcao_id: opcaoId,
      },
    });

    return Response.json(
      { message: 'Resposta salva com sucesso!' },
      { status: HttpStatus.OK },
    );
  } catch (error) {
    if (isAxiosError(error)) {
      return Response.json(
        { message: error.response?.data.message },
        { status: error.response?.status },
      );
    }

    return Response.json(
      { message: 'Erro desconhecido ao tentar salvar a resposta.' },
      { status: HttpStatus.INTERNAL_SERVER_ERROR },
    );
  }
}
