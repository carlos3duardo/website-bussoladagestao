import Image from 'next/image';

import { CtaButton, Label } from '@/components/ui';

export function TesteDiscHero() {
  return (
    <section data-slot="hero" className="relative">
      <Image
        src="/images/team-work.jpg"
        fill
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="bg-darken/50 absolute top-0 left-0 h-full w-full backdrop-blur-[10px]" />

      <div className="relative container mx-auto px-4 py-24 text-white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Label>Teste DISC</Label>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
              Potencialize sua equipe com o teste de personalidade
            </h1>
            <p className="mt-4 text-lg leading-tight font-medium text-balance">
              Descubra o perfil comportamental dos seus colaboradores, melhore a
              comunicação interna e tome decisões mais assertivas em gestão de
              pessoas.
            </p>
            <ul className="mt-6 flex flex-col gap-0 pl-2">
              <li className="flex items-center gap-3 font-medium">
                <span className="bg-primary-500 inline-block h-2 w-2 rounded-full" />
                <span>
                  Relatórios completos e visualização dos resultados em tempo
                  real
                </span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="bg-primary-500 inline-block h-2 w-2 rounded-full" />
                <span>Plataforma fácil, rápida e segura</span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <span className="bg-primary-500 inline-block h-2 w-2 rounded-full" />
                <span>Link exclusivo para sua empresa aplicar o teste</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 md:flex-row">
              <CtaButton
                className="w-full md:w-1/2 lg:w-auto"
                linkUrl="#formulario"
                label="Fazer avaliação agora"
              />
            </div>
          </div>
          <div>
            <figure className="relative flex aspect-video items-end overflow-hidden rounded-2xl bg-red-200 p-6 shadow-md">
              <Image
                src="/images/team-work.jpg"
                fill
                alt=""
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
              <div className="bg-darken absolute top-0 left-0 h-full w-full opacity-30" />

              <div className="grid w-full grid-cols-2 gap-6 xl:grid-cols-4">
                {['Dominante', 'Influente', 'Estável', 'Conforme'].map(
                  (t, i) => (
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
                  ),
                )}
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
