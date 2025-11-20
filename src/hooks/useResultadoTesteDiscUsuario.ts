import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';

import { getApiClientAccessToken } from '@/lib/api/accessToken';
import { ApiTesteDiscUsuarioResultado } from '@/types';

interface HookProps {
  inscricaoId: string;
  usuarioId: string;
  timeout?: number;
}

export function useResultadoTesteDiscUsuario({
  inscricaoId,
  usuarioId,
  timeout = 60,
}: HookProps) {
  const startedAtRef = useRef<number>(Date.now());

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
    refetchInterval: (query) => {
      const analise = query.state.data?.analise;
      const tempoDecorrido = Date.now() - startedAtRef.current;

      if (analise || tempoDecorrido >= timeout * 1000) {
        return false;
      }

      return 1000 * 10; // 10s
    },
  });

  return { isLoading, isSuccess, isError, data, error };
}
