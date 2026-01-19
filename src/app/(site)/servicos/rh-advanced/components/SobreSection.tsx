import {
  Binoculars,
  CalendarCheck,
  HandHelping,
  Lightbulb,
  ListTodo,
  SquareCheckBig,
  Target,
  UserPen,
  UserSearch,
} from 'lucide-react';

import { PageSection } from '@/components/ui';

export function SobreSection() {
  const features = [
    {
      icon: UserPen,
      title: 'Avaliação de desempenho',
      description: (
        <>
          Realize avaliações de seus colaboradores para identificar pontos
          fortes e oportunidades de melhoria.
        </>
      ),
    },
    {
      icon: ListTodo,
      title: "Elabore PDI's",
      description: (
        <>
          Planeje e desenvolva PDI's de melhorias para corrigir ou melhorar
          aspectos do seu colaborador.
        </>
      ),
    },
    {
      icon: Binoculars,
      title: 'Acompanhe o progresso',
      description: (
        <>
          Tenha uma visão geral e acompanhe se as ações estão sendo executadas.
        </>
      ),
    },
    {
      icon: Lightbulb,
      title: 'Fábrica de ideias',
      description: (
        <>
          Incentive os colaboradores a propor e desenvolver ideias inovadoras.
        </>
      ),
    },

    {
      icon: SquareCheckBig,
      title: 'Avaliações de experiência',
      description: (
        <>
          Realize pesquisas para receber o feedback de colaboradores nos seus
          períodos de experiẽncia.
        </>
      ),
    },
    {
      icon: UserSearch,
      title: 'Fatos observados',
      description: (
        <>
          Crie uma cultura de registrar ações e comportamentos dos colaboradores
          que possam servir de exemplo para os demais.
        </>
      ),
    },
  ] as const;
  return (
    <PageSection.Root>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <header className="flex flex-col items-center gap-4">
          <PageSection.Label>Sobre o RH Advanced</PageSection.Label>
          <div className="flex flex-col items-center gap-4">
            <PageSection.Headline className="max-w-[720px] text-center text-balance">
              Desenvolva pessoas e equipes para atingir seus objetivos
            </PageSection.Headline>
            <PageSection.Description className="w-full max-w-[960px] text-center text-balance">
              Tenha o histórico do desempenho de cada colaborador no exercício
              de sua função, bem como todas as competências necessárias para o
              bom desempenho.
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
