import Image from 'next/image';

import { PageSection } from '@/components/ui';
import {
  HandCoins,
  Presentation,
  Rocket,
  Star,
  UserPlus,
  Users,
  UserStar,
} from 'lucide-react';

export function BeneficiosSection() {
  const beneficios = [
    {
      icon: UserStar,
      title: 'Desenvolvimento de talentos',
      description: (
        <>
          Capacitação contínua focada em habilidades técnicas (
          <em>hard skills</em>) e comportamentais (<em>soft skills</em>),
          preparando líderes e formando profissionais completos.
        </>
      ),
    },
    {
      icon: UserPlus,
      title: 'Engajamento e retenção',
      description: (
        <>
          Cria um senso de pertencimento, mostra valorização do funcionário,
          reduz a rotatividade (<em>turnover</em>) e aumenta a lealdade à
          empresa.
        </>
      ),
    },
    {
      icon: Users,
      title: 'Cultura e alinhamento',
      description: (
        <>
          Disseminação dos valores, missão e visão da empresa, alinhando o
          desenvolvimento de todos com a estratégia organizacional.
        </>
      ),
    },
    {
      icon: HandCoins,
      title: 'Redução de custos e otimização',
      description: (
        <>
          Diminui gastos com treinamentos externos e otimiza recursos, pois o
          aprendizado é personalizado e focado nas necessidades da empresa.
        </>
      ),
    },
    {
      icon: Rocket,
      title: 'Agilidade e inovação',
      description: (
        <>
          Facilita a implementação de novas ideias e processos, além de preparar
          a equipe para as mudanças do mercado.
        </>
      ),
    },
    {
      icon: Presentation,
      title: 'Onboarding eficiente',
      description: (
        <>
          Acelera a integração de novos colaboradores, que aprendem rapidamente
          sobre a cultura e processos da empresa.
        </>
      ),
    },
  ] as const;

  return (
    <PageSection.Root className="">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8 lg:self-center">
            <header className="flex flex-col items-center gap-4 lg:items-start">
              <PageSection.Label>Beneficios</PageSection.Label>
              <div className="flex flex-col items-center gap-4 lg:items-start">
                <PageSection.Headline className="max-w-[720px] text-center text-balance lg:text-start">
                  Benefícios de uma universidade corporativa
                </PageSection.Headline>
                <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
                  Uma universidade corporativa oferece vantagens como{' '}
                  <strong>desenvolvimento contínuo e alinhado</strong> dos
                  colaboradores, <strong>redução de custos</strong> com
                  treinamentos externos,{' '}
                  <strong>maior engajamento e retenção</strong> de talentos,{' '}
                  <strong>padronização do conhecimento</strong>,{' '}
                  <strong>aceleração do onboarding</strong>,{' '}
                  <strong>fortalecimento da cultura organizacional</strong> e{' '}
                  <strong>maior agilidade</strong> para adaptação a mudanças,
                  resultando em equipes mais produtivas, autônomas e preparadas
                  para a inovação
                </PageSection.Description>
              </div>
            </header>
          </div>
          <figure className="flex items-center justify-center rounded-2xl">
            <Image
              src="/images/female-student-listening-webinar-online.svg"
              width={1920}
              height={1006}
              alt=""
              className="w-[80%] object-contain md:w-[60%px] lg:w-full"
            />
          </figure>
        </div>
        <div className="bg-primary-100 my-16 h-px w-full" />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beneficios.map(({ icon: Icon, title, description }, key) => (
            <li
              key={key}
              className="group hover:bg-primary-50 flex flex-col items-center gap-2 rounded-2xl lg:items-start lg:p-6"
            >
              <Icon className="text-primary-600 h-8 w-8" />
              <h3 className="text-center text-lg font-semibold text-gray-900 lg:text-left">
                {title}
              </h3>
              <p className="text-center text-sm text-balance text-gray-600 lg:text-left">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </PageSection.Root>
  );
}
