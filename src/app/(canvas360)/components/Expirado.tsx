'use client';

import { House } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { Button } from '@/components/ui';

export function Expirado() {
  const router = useRouter();

  const goHome = useCallback(() => {
    router.push('/servicos/autodiagnostico/canvas-360');
  }, [router]);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4 rounded-md bg-white p-8 shadow">
        <figure>
          <Image
            src="/images/icons/calendar-error.png"
            width={512}
            height={512}
            alt=""
            className="mx-auto h-24 w-24"
          />
        </figure>
        <h1 className="text-center text-2xl font-bold">Avaliação expirada</h1>
        <p className="text-center">
          O link que você criou expirou. Mas você pode criar uma nova avaliação
          novamente.
        </p>
        <div className="flex justify-center">
          <Button size="sm" onClick={goHome} icon={House}>
            Canvas 360
          </Button>
        </div>
      </div>
    </div>
  );
}
