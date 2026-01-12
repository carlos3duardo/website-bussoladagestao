import {
  CalendarCheck,
  HandHelping,
  Layers,
  ListTodo,
  SquareCheckBig,
  Target,
} from 'lucide-react';

import { PageSection } from '@/components/ui';

export function SobreSection() {
  const features = [
    {
      icon: Layers,
      title: 'Estruturado por dimensões',
      description: (
        <>
          Abrange todos os processos e resultados da organização, organizando-os
          por categorias.
        </>
      ),
    },
    {
      icon: HandHelping,
      title: 'Auxílio externo',
      description: (
        <>
          Você pode realizar com sua equipe interna ou com o auxílio de um de
          nossos especialistas.
        </>
      ),
    },
    {
      icon: Target,
      title: 'Ações corretivas',
      description: (
        <>Identifique pontos de melhorias e direcione ações estratégicas.</>
      ),
    },
    {
      icon: ListTodo,
      title: 'Elabore planos de ação',
      description: (
        <>
          Crie planos de ação com base nos resultados do diagnóstico e acompanhe
          seus andamentos.
        </>
      ),
    },
    {
      icon: CalendarCheck,
      title: 'Histórido de reuniões',
      description: (
        <>Registre e mantenha o histórico das reuniões de acompanhamento.</>
      ),
    },
    {
      icon: SquareCheckBig,
      title: 'Baseado em frameworks',
      description: (
        <>Inspirado no BMC, MEG&reg; e em boas práticas modernas de gestão.</>
      ),
    },
  ] as const;
  return (
    <PageSection.Root>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <header className="flex flex-col items-center gap-4">
          <PageSection.Label>Sobre o diagnóstico</PageSection.Label>
          <div className="flex flex-col items-center gap-4">
            <PageSection.Headline className="max-w-[720px] text-center text-balance">
              Solução de diagnóstico para qualquer porte de empresa
            </PageSection.Headline>
            <PageSection.Description className="w-full max-w-[960px] text-center text-balance">
              Você pode utilizar o Diagnóstico Corporativo para avaliar a
              maturidade de sua empresa e identificar pontos fortes e lacunas,
              sozinho, com sua equipe de gestores, ou com a ajuda de um
              especialista.
            </PageSection.Description>
          </div>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="group flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur transition-all hover:shadow-md"
            >
              <header className="flex flex-col items-center gap-1 lg:flex-row lg:gap-2">
                <figure className="bg-primary-100 flex h-10 w-10 items-center justify-center rounded-full">
                  <Icon className="text-primary-500 h-5 w-5" />
                </figure>
                <h4 className="text-center text-lg font-semibold text-gray-900 lg:text-left">
                  {title}
                </h4>
              </header>
              <p className="text-center text-sm text-balance text-gray-600 lg:text-left">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageSection.Root>
  );
}
