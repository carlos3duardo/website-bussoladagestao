import Image from 'next/image';

import { CtaButton, Label } from '@/components/ui';

export function HeroSection() {
  return (
    <section data-slot="hero" className="relative">
      <Image
        src="/images/businessman-manager-holding-tablet.jpg"
        fill
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="bg-darken/50 absolute top-0 left-0 h-full w-full backdrop-blur-[10px]" />

      <div className="relative container mx-auto px-4 py-24 text-white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Label>Modelo de Excelênca de Gestão</Label>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
              Os primeiros passos da excelência para o seu negócio
            </h1>
            <p className="mt-4 text-lg leading-tight font-medium text-balance">
              Avaliação premium baseada no Modelo de Excelência da Gestão (FNQ).
              Entenda seu nível de maturidade, priorize alavancas e acelere
              resultados com um plano de melhoria claro e objetivo.
            </p>
            <ul className="mt-6 flex flex-col gap-0 pl-2">
              <li className="flex items-center gap-3 font-medium">
                <span className="bg-primary-500 inline-block h-2 w-2 rounded-full" />
                <span>Aplicável para qualquer porte de empresa</span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="bg-primary-500 inline-block h-2 w-2 rounded-full" />
                <span>Baseada em 8 fundamentos da gestão</span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="bg-primary-500 inline-block h-2 w-2 rounded-full" />
                <span>Score por dimensão e prioridades de ação</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 md:flex-row">
              <CtaButton
                className="w-full md:w-1/2 lg:w-auto"
                linkUrl=""
                label="Fazer avaliação agora"
              />
              <CtaButton
                className="w-full md:w-1/2 lg:w-auto"
                variant="secondary"
                linkUrl=""
                label="Ver exemplo de relatório"
              />
            </div>
          </div>
          <div>
            <figure className="relative flex aspect-video items-end overflow-hidden rounded-2xl bg-red-200 p-6 shadow-md">
              <Image
                src="/images/businessman-manager-holding-tablet.jpg"
                fill
                alt=""
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
              <div className="bg-darken absolute top-0 left-0 h-full w-full opacity-30" />
              <Image
                src="/images/bg-home-chart-waves-overlay.png"
                alt=""
                width={992}
                height={222}
                className="absolute top-[36%] left-0 w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
