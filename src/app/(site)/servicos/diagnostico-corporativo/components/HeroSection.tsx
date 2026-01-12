import Image from 'next/image';

import { CtaButton, Label } from '@/components/ui';

export function HeroSection() {
  return (
    <section data-slot="hero" className="relative">
      <Image
        src="/images/page-header-servico-diagnostico-corporativo.jpg"
        fill
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="bg-darken/50 absolute top-0 left-0 h-full w-full" />

      <div className="relative container mx-auto px-4 py-24 text-white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Label>Avaliação da Gestão</Label>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
              Ferramentas avançadas para avaliar seu negócio
            </h1>
            <p className="mt-4 text-lg leading-tight font-medium text-balance">
              Possuímos modelos de avaliação que se adequa ao seu negócio. Seja
              capaz de identificar seus pontos fortes e oportunidades para
              melhoria.
            </p>
            <ul className="mt-6 flex flex-col gap-0 pl-2">
              <li className="flex items-center gap-3 font-medium">
                <span className="bg-primary-500 inline-block h-2 w-2 rounded-full" />
                <span>
                  Ferramentas de diagnóstico para qualquer porte de empresa
                </span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="bg-primary-500 inline-block h-2 w-2 rounded-full" />
                <span>Plataforma fácil, rápida e segura</span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="bg-primary-500 inline-block h-2 w-2 rounded-full" />
                <span>
                  Registre reuniões, planos de ação e tarefas para todo o seu
                  time
                </span>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 md:flex-row">
              <CtaButton
                className="w-full md:w-1/2 lg:w-auto"
                linkUrl=""
                label="Agende uma demonstração"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
