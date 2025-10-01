import { ChartColumnBig, MessageSquareHeart, Telescope } from 'lucide-react';
import Image from 'next/image';

import { PageSection } from '@/components/ui';

export function TesteDiscBeneficiosSection() {
  const beneficios = [
    {
      icon: Telescope,
      title: 'Gestão de pessoas',
      description:
        'Identifique talentos, alinhe equipes e desenvolva lideranças com base em dados comportamentais.',
    },
    {
      icon: ChartColumnBig,
      title: 'Clima organizacional',
      description:
        'Melhore a comunicação, reduza conflitos e aumente o engajamento dos colaboradores.',
    },
    {
      icon: MessageSquareHeart,
      title: 'Decisões estratégicas',
      description:
        'Tenha informações valiosas para processos de seleção, promoção e desenvolvimento de equipes.',
    },
  ] as const;

  return (
    <PageSection.Root className="">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <figure className="flex items-center justify-center rounded-2xl">
            <Image
              src="/images/profile-segmentation.svg"
              width={3800}
              height={3800}
              alt=""
              className="w-[80%] object-contain md:w-[60%] lg:w-full"
            />
          </figure>
          <div>
            <header className="flex flex-col items-center gap-4 lg:items-start">
              <PageSection.Label>Benefícios</PageSection.Label>
              <div className="items-center: flex flex-col gap-4 lg:items-start">
                <PageSection.Headline className="max-w-[720px] text-center text-balance lg:text-start">
                  Porque aplicar o Teste DISC na sua empresa?
                </PageSection.Headline>
                <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
                  Aplicando o teste DISC, você pode aumentar o autoconhecimento
                  dos indivíduos e melhorar o desempenho das equipes em
                  empresas, pois ele ajuda a identificar perfis comportamentais
                  para alinhar talentos às funções, otimizar o recrutamento e a
                  seleção, e desenvolver programas de desenvolvimento individual
                  e de equipe.
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
                      <p className="leading-tight text-balance">
                        {description}
                      </p>
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
