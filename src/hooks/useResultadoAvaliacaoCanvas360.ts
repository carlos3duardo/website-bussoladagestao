// useResultadoAvaliacaoCanvas360.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';

import { ApiAvCorpAvaliacaoProps } from '@/types';

interface HookProps {
  avaliacaoId: string;
  timeout?: number;
}

export function useResultadoAvaliacaoCanvas360({
  avaliacaoId,
  timeout = 60,
}: HookProps) {
  const startedAtRef = useRef<number>(Date.now());

  const { isLoading, isSuccess, isError, error, data } = useQuery({
    queryKey: ['resultado-avcorp-canvas360', avaliacaoId],
    queryFn: async () => {
      const response = await axios.get(
        `/api/trial/avcorp/canvas360/avaliacao/${avaliacaoId}`,
        {
          params: {
            with: 'resultado,analise',
          },
        },
      );

      return response.data as unknown as ApiAvCorpAvaliacaoProps;
    },
    refetchInterval: (query) => {
      const analise = query.state.data?.analise;
      const tempoDecorrido = Date.now() - startedAtRef.current;

      if (analise || tempoDecorrido >= timeout * 1000) {
        return false;
      }

      return 1000 * 5;
    },
  });

  return { isLoading, isSuccess, isError, data, error };
}
