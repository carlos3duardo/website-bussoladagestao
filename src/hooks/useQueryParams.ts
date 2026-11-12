'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type QueryValue = string | number | (string | number)[] | null | undefined;

export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  // Ainda precisamos disso pra LER valores nos componentes (dispara
  // re-render quando a URL muda) — só não usamos ele pra ESCREVER.
  const searchParams = useSearchParams();

  const setParams = useCallback(
    (patch: Record<string, QueryValue>) => {
      // Fonte de verdade pra ESCRITA: a URL real do navegador agora, não
      // o snapshot do último render. Evita duas chamadas em sequência
      // (ex: filtro muda + página reseta) se pisarem uma na outra.
      const params = new URLSearchParams(window.location.search);

      for (const [key, value] of Object.entries(patch)) {
        const isEmpty =
          value === null ||
          value === undefined ||
          value === '' ||
          (Array.isArray(value) && value.length === 0);

        if (isEmpty) {
          params.delete(key);
        } else if (Array.isArray(value)) {
          params.set(key, value.join(','));
        } else {
          params.set(key, String(value));
        }
      }

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname],
  );

  return { searchParams, setParams };
}
