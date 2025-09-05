import Image from 'next/image';

import { CtaButton, Label } from '@/components/ui';

export function HeroSection() {
  return (
    <section data-slot="hero" className="relative">
      <Image
        src="/images/content-young-woman-holding-digital-tablet.jpg"
        fill
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="bg-darken/50 absolute top-0 left-0 h-full w-full backdrop-blur-[10px]" />

      <div className="relative container mx-auto px-4 py-24 text-white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Label>Inspirado no Business Model Canvas</Label>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
              Avaliação 360<sup>o</sup> do seu modelo de negócio
            </h1>
            <p className="mt-4 text-lg leading-tight font-medium text-balance">
              Uma avaliação prática e direta que mede a maturidade do seu modelo
              de negócio - de estratégia a execução: clientes, canais, proposta
              de valor, finanças, pessoas e informação.
            </p>
            <ul className="mt-6 flex flex-col gap-0 pl-2">
              <li className="flex items-center gap-3 font-medium">
                <span className="bg-primary-500 inline-block h-2 w-2 rounded-full" />
                <span>Leva cerca de 10-15 minutos</span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="bg-primary-500 inline-block h-2 w-2 rounded-full" />
                <span>Escala de resposta: Não atende → Atende plenamente</span>
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
                src="/images/content-young-woman-holding-digital-tablet.jpg"
                fill
                alt=""
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
              <div className="bg-darken absolute top-0 left-0 h-full w-full opacity-30" />

              <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3">
                {[
                  'Estratégia',
                  'Clientes & Mercado',
                  'Produtos & Processos',
                  'Financeiro',
                  'Pessoas',
                  'Informação',
                ].map((t, i) => (
                  <div
                    key={i}
                    className="bg-darken/40 rounded-lg border border-white/20 shadow-md backdrop-blur-sm"
                  >
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-white">
                          {t}
                        </span>
                        <span className="text-primary-300 text-xs font-semibold">
                          {70 + i * 3}%
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 rounded bg-black/40">
                        <div
                          className="bg-primary-400 h-1.5 rounded"
                          style={{ width: `${65 + i * 5}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
