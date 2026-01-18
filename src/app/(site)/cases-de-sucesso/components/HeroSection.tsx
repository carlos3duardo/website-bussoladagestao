import Image from 'next/image';

import { CtaButton, Label } from '@/components/ui';

export function HeroSection() {
  return (
    <section data-slot="hero" className="relative px-4 lg:px-6 xl:px-8">
      <Image
        src="/images/page-header-cases-de-sucesso.jpg"
        fill
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="bg-darken/50 absolute top-0 left-0 h-full w-full backdrop-blur-[2px]" />

      <div className="relative container mx-auto py-24 text-white">
        <div className="mx-auto flex w-full flex-col items-center lg:w-2/3">
          <Label>Clientes</Label>
          <h1 className="mt-4 text-center text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            Impulsionamos crescimento de nossos parceiros
          </h1>
          <p className="mt-4 text-center text-lg leading-tight font-medium text-balance">
            Nosso programa de desenvolvimento empresarial nasceu na necessidade
            de um dos nossos parceiros, e que conseguimos replicar para outras
            empresas que enfrentam os mesmos desafios.
          </p>
          <div className="mt-8 flex flex-col gap-3 md:flex-row">
            <CtaButton
              className="w-full lg:w-auto"
              linkUrl="/contato?assunto=demonstracao"
              label="Vamos conversar?"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
