import {
  BrainCircuit,
  ChartNoAxesCombined,
  ClockArrowUp,
  Leaf,
  Telescope,
  TrendingUpDown,
} from 'lucide-react';
import Image from 'next/image';

import { PageSection } from '@/components/ui';

export function BeneficiosSection() {
  const beneficios = [
    {
      number: 1,
      icon: ClockArrowUp,
      title: 'Autonomia e velocidade',
      description:
        'Autodiagnóstico no seu ritmo, sem depender de longas agendas.',
    },
    {
      number: 2,
      icon: Telescope,
      title: 'Visão 360°',
      description:
        'Maturidade por dimensão do MEG21 com pontos fortes e lacunas.',
    },
    {
      number: 3,
      icon: TrendingUpDown,
      title: 'Roadmap priorizado',
      description:
        'Plano orientado a valor com quick wins e iniciativas estruturantes.',
    },
    {
      number: 4,
      icon: Leaf,
      title: 'Governança e ESG',
      description:
        'Fortalecimento de práticas, conformidade e sustentabilidade.',
    },
    {
      number: 5,
      icon: ChartNoAxesCombined,
      title: 'Eficiência operacional',
      description: 'Redução de retrabalho, melhoria de processos e resultados.',
    },
    {
      number: 6,
      icon: BrainCircuit,
      title: 'Comentários por IA',
      description:
        'Análises e recomendações finais geradas por IA, personalizadas.',
    },
  ] as const;

  return (
    <PageSection.Root className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4">
        <header className="flex flex-col items-center gap-4">
          <PageSection.Label>Benefícios</PageSection.Label>
          <div className="items-center: flex flex-col gap-4">
            <PageSection.Headline className="max-w-[720px] text-center text-balance">
              O que sua empresa ganha
            </PageSection.Headline>
            <PageSection.Description className="w-full max-w-[720px] text-center text-balance">
              Sendo avaliada sob os 8 fundamentos da gestão, sua empresa terá um
              diagnóstico completo e claro sobre o modelo de negócio.
            </PageSection.Description>
          </div>
        </header>

        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {beneficios.map(({ number, icon: Icon, title, description }) => (
            <li
              key={number}
              className="bg-darken rounded-lg p-4 shadow-md lg:p-6"
            >
              <header className="flex flex-col gap-2">
                <figure className="bg-primary-500/10 border-primary-500/20 flex h-10 w-10 items-center justify-center rounded-lg border">
                  <Icon size={24} className="text-primary-400 h-6 w-6" />
                </figure>
                <h3 className="flex-1 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-balance opacity-80">{description}</p>
              </header>
            </li>
          ))}
        </ul>
      </div>
    </PageSection.Root>
  );
}
