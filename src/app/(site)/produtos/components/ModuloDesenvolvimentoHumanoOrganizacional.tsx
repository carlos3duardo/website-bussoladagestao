import { Compass } from 'lucide-react';

import { PageSection } from '@/components/ui';

export function ModuloDesenvolvimentoHumanoOrganizacional() {
  return (
    <PageSection.Root className="bg-linear-to-br from-neutral-700 to-neutral-900 py-0 text-white/90">
      <div className="grid w-full lg:grid-cols-2">
        <div className="w-full py-8 lg:place-self-center">
          <div className="w-full bg-[url(/images/modulo-avaliacao-v2.png)] bg-contain bg-center bg-no-repeat sm:h-[360px]"></div>
        </div>
        <div className="w-full justify-items-start">
          <div className="flex w-full flex-col gap-4 px-4 py-24 lg:max-w-[768px] xl:px-6">
            <PageSection.Headline className="max-w-[960px] text-center text-balance lg:text-left">
              Módulo de Avaliação de Desempenho do Colaborador
            </PageSection.Headline>
            <PageSection.Paragraph className="text-left text-lg">
              Com reursos como Avaliação de Desempenho, feedbacks contínuos,
              Matriz 9Box, avaliação de experiência, análise de engajamento e
              Planos de Desenvolvimento Individual (PDI), este módulo garante
              uma gestão baseada em dados e direcionada à evolução de talentos.
              <br />
              Além disso, os relatórios em tempo real faciliram decisões
              estratégicas sobre promoções, treinamentos e realocações.
            </PageSection.Paragraph>
            <h3 className="text-xl font-semibold lg:text-left">
              Principais recursos
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2">
                <figure>
                  <Compass size={18} className="text-primary-500" />
                </figure>
                <div>
                  <strong>Avaliação de Desempenho</strong>
                  <br />
                  Tem como objetivo analisar o desempenho individual ou de um
                  grupo de funcionários. Por meio desse processo, o líder pode
                  diagnosticar e analisar o comportamento de um colaborador
                  durante um período de tempo determinado.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <figure>
                  <Compass size={18} className="text-primary-500" />
                </figure>
                <div>
                  <strong>Fábrica de Ideias</strong>
                  <br />
                  Na fábrica de ideias o colaborador poderá registrar suas
                  ideias para serem analisadas e implementadas na empresa.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <figure>
                  <Compass size={18} className="text-primary-500" />
                </figure>
                <div>
                  <strong>Teste de Engajamento</strong>
                  <br />
                  São pesquisas com o objetivo de avaliar líderes, com perguntas
                  para identificar o nível de engajamento de seus liderados.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageSection.Root>
  );
}
