import Image from 'next/image';

import { CtaButton, Label } from '@/components/ui';

export function HeroSection() {
  return (
    <section data-slot="hero" className="relative">
      <Image
        src="/images/page-header-cases-de-sucesso.jpg"
        fill
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="bg-darken/50 absolute top-0 left-0 h-full w-full backdrop-blur-[2px]" />

      <div className="relative container mx-auto py-24 text-white">
        <div className="flex flex-col items-center">
          <Label>Superação</Label>
          <h1 className="mt-4 w-1/2 text-center text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            Impulsionamos crescimento de nossos parceiros
          </h1>
          <p className="mt-4 w-1/2 text-center text-lg leading-tight font-medium text-balance">
            Nosso programa de desenvolvimento empresarial nasceu na necessidade
            de um dos nossos parceiros, e que conseguimos replicar para outras
            empresas que enfrentam os mesmos desafios.
          </p>
          <div className="mt-8 flex flex-col gap-3 md:flex-row">
            <CtaButton
              className="w-full md:w-1/2 lg:w-auto"
              linkUrl="/contato?assunto=demonstracao"
              label="Vamos conversar?"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
