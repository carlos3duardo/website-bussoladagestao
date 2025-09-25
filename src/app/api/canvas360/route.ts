import axios, { isAxiosError } from 'axios';

import { API_URL } from '@/config/app';
import { getApiClientAccessToken } from '@/lib/api/accessToken';
import { HttpStatus } from '@/lib/consts';

type InscricaoProps = {
  nome: string;
  empresa: string | null;
  cargo: string | null;
  email: string;
  whatsapp: string | null;
  municipio: string | null;
  uf: string | null;
};

export async function POST(req: Request) {
  const data = (await req.json()) as unknown as InscricaoProps;

  const accessToken = await getApiClientAccessToken();

  console.log({ data, accessToken });

  try {
    await axios({
      baseURL: API_URL,
      url: '/trial/avcorp/canvas360/inscricao',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      data,
    });

    return Response.json(
      { message: 'Inscrição realizada com sucesso!' },
      { status: HttpStatus.CREATED },
    );
  } catch (error) {
    console.error(error);

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
