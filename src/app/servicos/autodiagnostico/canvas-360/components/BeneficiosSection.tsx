import { ChartColumnBig, MessageSquareHeart, Telescope } from 'lucide-react';
import Image from 'next/image';

import { PageSection } from '@/components/ui';

export function BeneficiosSection() {
  const beneficios = [
    {
      icon: Telescope,
      title: 'Visão 360',
      description:
        'Panorama único que integra estratégia, mercado, operação e finanças.',
    },
    {
      icon: ChartColumnBig,
      title: 'Score acionável',
      description: 'Notas por dimensão e recomendações claras de evolução.',
    },
    {
      icon: MessageSquareHeart,
      title: 'Linguagem simples',
      description: 'Sem jargões desnecessários. Direto ao ponto.',
    },
  ] as const;

  return (
    <PageSection.Root className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <figure className="flex items-center justify-center rounded-2xl">
            <Image
              src="/images/business-charts.png"
              width={1920}
              height={1336}
              alt=""
              className="w-[80%] object-contain md:w-[60%px] lg:w-full"
            />
          </figure>
          <div>
            <header className="flex flex-col items-center gap-4 lg:items-start">
              <PageSection.Label>Benefícios</PageSection.Label>
              <div className="items-center: flex flex-col gap-4 lg:items-start">
                <PageSection.Headline className="max-w-[720px] text-center text-balance lg:text-start">
                  O que sua empresa ganha
                </PageSection.Headline>
                <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
                  O Diagnóstico Canvas 360 mede a maturidade do seu modelo de
                  negócio de ponta a ponta, revelando o que já funciona e o que
                  precisa evoluir para crescer com consistência.
                </PageSection.Description>
              </div>
            </header>
            <div>
              <ul className="mt-8 flex flex-col gap-4">
                {beneficios.map(({ icon: Icon, title, description }, i) => (
                  <li key={i} className="flex gap-4">
                    <figure className="bg-primary-500/10 ring-primary-500 flex h-8 w-8 items-center justify-center rounded-full ring-2">
                      <Icon className="text-primary-500 h-4 w-4" />
                    </figure>
                    <div className="flex flex-1 flex-col gap-0">
                      <h3 className="text-lg leading-tight font-bold">
                        {title}
                      </h3>
                      <p className="leading-tight">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageSection.Root>
  );
}
