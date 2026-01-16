import Image from 'next/image';

import { PageSection } from '@/components/ui';

export function HistoriaSection() {
  return (
    <PageSection.Root className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <header className="flex flex-col items-center gap-4 lg:items-start">
              <PageSection.Label>O Método</PageSection.Label>
              <div className="flex flex-col items-center gap-4 lg:items-start">
                <PageSection.Headline className="max-w-[720px] text-center text-balance lg:text-start">
                  O Método RH Advanced
                </PageSection.Headline>
                <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
                  O RH Advanced é um método de desenvolvimento organizacional e
                  fortalecimento da área de Recursos Humanos.
                </PageSection.Description>
                <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
                  Ele foi estruturado para conduzir empresas por todas as etapas
                  do ciclo de Gestão de Pessoas, desde o mapeamento das
                  competências até o redirecionamento de talentos.
                </PageSection.Description>
                <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
                  O programa intercala momentos de mentoria coletiva com
                  encontros de implantação prática da plataforma de avaliação de
                  desempenho.
                </PageSection.Description>
                <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
                  A jornada é organizada de forma dinâmica e cíclica,
                  possibilitando a participação contínua de novas empresas.
                </PageSection.Description>
              </div>
            </header>
          </div>
          <figure className="flex items-center justify-center rounded-2xl">
            <Image
              src="/images/profile-ratings.svg"
              width={1920}
              height={1084}
              alt=""
              className="w-[80%] object-contain md:w-[60%px] lg:w-full"
            />
          </figure>
        </div>
      </div>
    </PageSection.Root>
  );
}
