import {
  Clock,
  Layers,
  MessageSquareHeart,
  SlidersHorizontal,
  SquareCheckBig,
  Target,
} from 'lucide-react';

import { PageSection } from '@/components/ui';

export function SobreSection() {
  const features = [
    {
      icon: Clock,
      title: 'Rápido e objetivo',
      description:
        'Em 10–15 minutos você conclui e recebe seu score geral e por dimensão.',
    },
    {
      icon: Layers,
      title: 'Estruturado por dimensões',
      description:
        'Estratégia, Clientes & Mercado, Produtos & Processos, Financeiro, Pessoas e Informação.',
    },
    {
      icon: Target,
      title: 'Ações prioritárias',
      description:
        'Sugestões práticas para melhorar cada dimensão com impacto.',
    },
    {
      icon: MessageSquareHeart,
      title: 'Linguagem amigável',
      description:
        'Feito para PMEs, sem perder a profundidade necessária para grandes.',
    },
    {
      icon: SlidersHorizontal,
      title: 'Comparativo ao longo do tempo',
      description: 'Monitore a evolução: antes/depois e marcos trimestrais.',
    },
    {
      icon: SquareCheckBig,
      title: 'Baseado em frameworks',
      description: 'Inspirado no BMC e em boas práticas modernas de gestão.',
    },
  ] as const;
  return (
    <PageSection.Root>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <header className="flex flex-col items-center gap-4">
          <PageSection.Label>Sobre o diagnóstico</PageSection.Label>
          <div className="flex flex-col items-center gap-4">
            <PageSection.Headline className="max-w-[720px] text-center text-balance">
              Clareza rápida sobre forças, lacunas e próximas ações
            </PageSection.Headline>
            <PageSection.Description className="w-full max-w-[720px] text-center text-balance">
              O Diagnóstico Canvas 360 mede a maturidade do seu modelo de
              negócio de ponta a ponta, revelando o que já funciona e o que
              precisa evoluir para crescer com consistência.
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
