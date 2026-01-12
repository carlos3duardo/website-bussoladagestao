import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

import { PageSection } from '@/components/ui';

import { FormularioContato } from './components/FormularioContato';

export const metadata: Metadata = {
  title: 'Contato',
  description: '',
};

export default async function Page() {
  return (
    <main>
      <header className="relative flex h-[280px] w-full items-center bg-[url(/images/page-header-contato.jpg)] bg-cover bg-center">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50" />
        <div className="relative container mx-auto text-white">
          <h1 className="mt-4 text-center text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            Contato
          </h1>
          <h2 className="mt-2 text-center text-lg leading-tight font-medium tracking-tight text-balance md:text-xl">
            Preencha o formulário abaixo para nos enviar uma mensagem
          </h2>
        </div>
      </header>

      <PageSection.Root className="">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-12 lg:px-8">
          <figure className="-mb-24 hidden self-end lg:col-span-5 lg:block">
            <Image
              src="/images/texting-woman-01.png"
              width={800}
              height={1000}
              alt=""
            />
          </figure>
          <div className="lg:col-span-7">
            <Suspense>
              <FormularioContato />
            </Suspense>
          </div>
        </div>
      </PageSection.Root>
    </main>
  );
}
