import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { getApiClientAccessToken } from '@/lib/api/accessToken';
import { ApiTesteDiscInscricao } from '@/types';

interface HookProps {
  inscricaoId: string;
  refetchInterval?: number;
}

export function useTesteDiscInscricao({
  inscricaoId,
  refetchInterval = 120,
}: HookProps) {
  const { isLoading, isSuccess, isError, error, data } = useQuery({
    queryKey: ['resultado-teste-disc-usuario', inscricaoId],
    queryFn: async () => {
      const accessToken = await getApiClientAccessToken();

      const response = await axios.get(`/api/trial/disc/${inscricaoId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data as unknown as ApiTesteDiscInscricao;
    },
    refetchInterval: refetchInterval * 1000,
  });

  return { isLoading, isSuccess, isError, data, error };
}
