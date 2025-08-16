import Image from 'next/image';

import { HomeSection } from '@/components/ui';

import background from './assets/images/bg-charts.svg';

const features = [
  {
    iconUrl: '/images/icons/statistical-analysis.svg',
    title: 'Diagnóstico organizacional',
    description:
      'Realize diagnósticos completos, identifique pontos fortes e oportunidades de melhoria e direcione ações estratégicas para resultados reais.',
    linkUrl: '/',
  },
  {
    iconUrl: '/images/icons/teamwork-2.svg',
    title: 'RH Estratégico',
    description:
      'Promova uma cultura de desenvolvimento e performance através da gestão de pessoas, com testes de perfil, avaliações de desempenho, feedbacks e planos de desenvolvimento.',
    linkUrl: '/',
  },
  {
    iconUrl: '/images/icons/compass.svg',
    title: 'Aprendizado contínuo',
    description:
      'Ofereça treinamentos online, acompanhe o desempenho dos colaboradores e promova uma cultura de aprendizado contínuo. Invista no crescimento do seu time.',
    linkUrl: '/',
  },
  {
    iconUrl: '/images/icons/good-quality.svg',
    title: 'Experiência do cliente',
    description:
      'Ouça como o seu cliente avalia seu atendimento. Ofereça feedbacks e avaliações. Avalie e melhore o seu processo de desenvolvimento empresarial.',
    linkUrl: '/',
  },
] as const;

export function NossosServicos() {
  return (
    <HomeSection.Root className="bg-slate-100">
      <Image
        src={background}
        width={1920}
        height={1280}
        className="absolute top-0 left-0 h-full w-full object-cover"
        alt=""
      />
      <div className="relative container mx-auto flex flex-col gap-20">
        <header className="flex flex-col items-start gap-4">
          <HomeSection.Label>Serviços</HomeSection.Label>
          <div className="grid grid-cols-2 gap-16">
            <HomeSection.Headline>
              Um programa de desenvolvimento empresarial
            </HomeSection.Headline>
            <HomeSection.Description>
              Atendemos clientes em todos os níveis de suas organizações, seja
              como consultores de confiança para a alta gestão ou como mentores
              práticos. As necessidades de nossos clientes estão sempre mudando,
              por isso buscamos continuamente novas e melhores maneiras de
              atendê-los.
            </HomeSection.Description>
          </div>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, iconUrl }, key) => (
            <div
              key={title}
              className="flex flex-col gap-6 rounded-md bg-white/70 p-8 text-black/80 shadow-md md:data-[even=true]:-mt-12 md:data-[even=true]:mb-12"
              data-even={key % 2 !== 0}
            >
              <figure>
                <Image src={iconUrl} alt={title} width={64} height={64} />
              </figure>
              <h5 className="text-xl font-bold">{title}</h5>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </HomeSection.Root>
  );
}
