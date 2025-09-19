import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { API_URL } from '@/config/app';
import { getApiClientAccessToken } from '@/lib/api/accessToken';
import { ApiTesteDiscUsuarioResultado } from '@/types';

interface HookProps {
  inscricaoId: string;
  usuarioId: string;
}

export function useResultadoTesteDiscUsuario({
  inscricaoId,
  usuarioId,
}: HookProps) {
  const { isLoading, isSuccess, isError, error, data } = useQuery({
    queryKey: ['resultado-teste-disc-usuario', inscricaoId, usuarioId],
    queryFn: async () => {
      const accessToken = await getApiClientAccessToken();

      const response = await axios.get(
        `/api/trial/disc/${inscricaoId}/usuario/${usuarioId}/resultado`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      return response.data as unknown as ApiTesteDiscUsuarioResultado;
    },
  });

  return { isLoading, isSuccess, isError, data, error };
}
