import { Compass } from 'lucide-react';

import { PageSection } from '@/components/ui';

export function ModuloPesquisaSatisfacao() {
  return (
    <PageSection.Root className="bg-linear-to-br from-neutral-700 to-neutral-900 py-0 text-white/90">
      <div className="grid w-full lg:grid-cols-2">
        <div className="w-full py-8 lg:place-self-center">
          <div className="w-full bg-[url(/images/modulo-avaliacao-v2.png)] bg-contain bg-center bg-no-repeat sm:h-[360px]"></div>
        </div>
        <div className="w-full justify-items-start">
          <div className="flex w-full flex-col gap-4 px-4 py-24 lg:max-w-[768px] xl:px-6">
            <PageSection.Headline className="max-w-[960px] text-center text-balance lg:text-left">
              Módulo de Pesquisa e Satisfação
            </PageSection.Headline>
            <PageSection.Paragraph className="text-left text-lg">
              A plataforma de pesquisa e satisfação tem como finalidade mensurar
              e acompanhar o grau de satisfação e lealdade dos clientes,
              possibilitando decisões estratégicas baseadas em dados concretos
            </PageSection.Paragraph>
            <PageSection.Paragraph className="text-left text-lg">
              A metodologia aplicada é o Net Promoter Score (NPS), reconhecida
              mundialmente por sua simplicidade e eficácia em traduzir a
              experiência do cliente em métricas claras e acionáveis.
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
                  <strong>Personalização das pesquisas</strong>
                  <br />
                  Use o logotipo e as cores de sua empresa deixe a pesquisa com
                  personalidade.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <figure>
                  <Compass size={18} className="text-primary-500" />
                </figure>
                <div>
                  <strong>Não é limitado apenas ao NPS</strong>
                  <br />
                  Você também pode aplicar pesquisas utilizando a métrica de
                  5-estrelas e também curtir/não curtir.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <figure>
                  <Compass size={18} className="text-primary-500" />
                </figure>
                <div>
                  <strong>Dashboard com dados em tempo real</strong>
                  <br />
                  Visualização dinâmica das métricas e indicadores coletados.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageSection.Root>
  );
}
