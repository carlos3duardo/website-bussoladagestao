import Image from 'next/image';

import { HomeSection } from '@/components/ui';

const areas = [
  {
    id: 1,
    title: 'Hospitais e clínicas',
    description:
      'Otimize a gestão de talentos e a qualidade assistencial. Desenvolva equipes, avalie desempenho e use o NPS para aprimorar a experiência do paciente e a eficiência operacional.',
    imageUrl: '/images/icons/clinic.png',
  },
  {
    id: 2,
    title: 'Instituições de ensino',
    description:
      'Crie uma universidade corporativa para docentes e staff. Ofereça trilhas de aprendizado por cargo, avaliações e indicadores para elevar a qualidade acadêmica e administrativa.',
    imageUrl: '/images/icons/campus.png',
  },
  {
    id: 3,
    title: 'Hotelaria e turismo',
    description:
      'Eleve a excelência no atendimento. Com feedbacks em tempo real, PDIs e pesquisas NPS, integre o diagnóstico de processos e o desenvolvimento de equipes para fidelizar clientes.',
    imageUrl: '/images/icons/resort.png',
  },
  {
    id: 4,
    title: 'Indústria e manufatura',
    description:
      'Estruture competências técnicas e comportamentais. Acompanhe desempenho e engajamento, e use o MEG para diagnosticar oportunidades, elevando produtividade e segurança.',
    imageUrl: '/images/icons/factory.png',
  },
  {
    id: 5,
    title: 'Tecnologia e Startups',
    description:
      'Acelere o desenvolvimento de equipes ágeis. Com trilhas de conhecimento, gestão de feedbacks e fábrica de ideias, promova inovação e alta performance em um ambiente dinâmico.',
    imageUrl: '/images/icons/idea.png',
  },
  {
    id: 6,
    title: 'Varejo',
    description:
      'Potencialize a performance de vendas e atendimento. Capacite equipes com trilhas de conhecimento, gerencie desempenho e engajamento, e use o NPS para fidelizar clientes e otimizar a operação.',
    imageUrl: '/images/icons/shopping.png',
  },
] as const;

export function AreaDeAtuacao() {
  return (
    <HomeSection.Root className="bg-slate-50">
      <div className="relative container mx-auto flex flex-col gap-20 px-4">
        <header className="flex flex-col items-center gap-4">
          <HomeSection.Label>Onde ja atuamos</HomeSection.Label>
          <div className="flex flex-col items-center gap-4">
            <HomeSection.Headline>Nossa área de atuação</HomeSection.Headline>
            <HomeSection.Description className="w-full max-w-[600px] text-center">
              Nossos produtos e serviços atendem organizações dos mais diversos
              segmentos. Não há limites para onde chegar, se sua empresa estiver
              preparada para evoluir. Estamos prontos para ajudar.
            </HomeSection.Description>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-[1px] overflow-hidden rounded-md border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, key) => (
            <div
              key={area.id}
              data-even={key % 2 !== 0}
              className="hover:bg-primary-50 hover:md:data-[even=true]:bg-primary-50 flex flex-col items-center gap-4 bg-white p-12 transition duration-200 md:data-[even=true]:bg-slate-50 xl:flex-row xl:items-start xl:gap-6"
            >
              <figure>
                <Image
                  src={area.imageUrl}
                  alt={area.title}
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
              </figure>
              <div className="flex flex-1 flex-col gap-1 text-center xl:text-left">
                <h4 className="text-xl font-semibold">{area.title}</h4>
                <p>{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HomeSection.Root>
  );
}
