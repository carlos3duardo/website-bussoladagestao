import axios, { isAxiosError } from 'axios';

import { API_URL } from '@/config/app';
import { getApiClientAccessToken } from '@/lib/api/accessToken';
import { HttpStatus } from '@/lib/consts';

type UsuarioProps = {
  inscricaoId: string;
  nome: string;
  email: string;
  whatsapp: string | null;
  cargo: string;
};

export async function POST(req: Request) {
  const usuario = (await req.json()) as unknown as UsuarioProps;

  const accessToken = await getApiClientAccessToken();

  console.log({ usuario, accessToken });

  try {
    const response = await axios({
      baseURL: API_URL,
      url: `/trial/disc/${usuario.inscricaoId}/usuario`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      data: usuario,
    });

    const responseJson = response.data.data;

    return Response.json(
      { message: 'Inscrição realizada com sucesso!', data: responseJson },
      { status: HttpStatus.CREATED },
    );
  } catch (error) {
    if (isAxiosError(error)) {
      return Response.json(
        { message: error.response?.data.message },
        { status: error.response?.status },
      );
    }

    return Response.json(
      { message: 'Erro desconhecido ao tentar realizar a inscrição.' },
      { status: HttpStatus.INTERNAL_SERVER_ERROR },
    );
  }
}
