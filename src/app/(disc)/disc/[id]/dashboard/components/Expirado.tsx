'use client';

import { House } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { Button } from '@/components/ui';

interface ExpiradoProps {
  title?: string;
  description?: string;
  buttonUrl?: string;
}

export function Expirado({ title, description, buttonUrl }: ExpiradoProps) {
  const router = useRouter();

  const goHome = useCallback(() => {
    router.push(buttonUrl || '/servicos/teste-perfil');
  }, [router, buttonUrl]);

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
        <h1 className="text-center text-2xl font-bold">
          {title || 'Seu teste DISC expirou'}
        </h1>
        <p className="text-center">
          {description ||
            'O link que você criou expirou. Mas você pode criar um novo teste DISC.'}
        </p>
        <div className="flex justify-center">
          <Button size="sm" onClick={goHome} icon={House}>
            Teste DISC
          </Button>
        </div>
      </div>
    </div>
  );
}
