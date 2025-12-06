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
              Nosso módulo de Avaliação da Maturidade é a ferramente ideal para
              empresas que buscam evoluir sua gestão, alinhando tecnologia,
              inovação e resultados.
              <br />
              Através de uma de suas avaliações de diagnósticos, é possível
              identificar setores críticos e oportunidades de melhoria,
              permitindo uma gestão mais eficiente e com foco na evolução da
              maturidade organizacional.
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
                  <strong>Avaliação Organizacional do MEG21</strong>
                  <br />
                  Permite medir a maturidade da gestão com base nos fundamentos
                  do Modelo de Excelência da Gestão, identificando forças e
                  oportinidades para melhoria.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <figure>
                  <Compass size={18} className="text-primary-500" />
                </figure>
                <div>
                  <strong>Diagnóstico Empresarial</strong>
                  <br />
                  Avaliação rápida e objetiva da empresa utilizando metodologia
                  baseada no Business Model Canvas (BMC), identificando pontos
                  fortes e fracos
                </div>
              </li>
              <li className="flex items-start gap-2">
                <figure>
                  <Compass size={18} className="text-primary-500" />
                </figure>
                <div>
                  <strong>Criação de planos de ação no formato 5W2H</strong>
                  <br />
                  Organização e acompanhamento de estratégias e tarefas com
                  prazos, responsáveis e prioridades definidas
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageSection.Root>
  );
}
