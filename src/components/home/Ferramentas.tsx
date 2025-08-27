import Image from 'next/image';

import { HomeSection } from '@/components/ui';

import backgroundImage from './assets/images/bg-sistema-10.jpg';

const sistemas = [
  {
    id: 1,
    title: 'Diagnóstico corporativo',
    description:
      'Identifique com clareza os pontos de melhoria da sua empresa. Avalie processos, crie planos de ação e acompanhe tudo em uma plataforma prática e intuitiva.',
  },
  {
    id: 2,
    title: 'Desenvolvimento Humano',
    description:
      'Invista na evolução da sua equipe. Realize avaliações, dê feedbacks estruturados e crie planos de desenvolvimento individual para cada colaborador.',
  },
  {
    id: 3,
    title: 'Universidade corporativa',
    description:
      'Ofereça treinamentos em um ambiente digital personalizado. Centralize conteúdos estratégicos para estimular aprendizado contínuo e fortalecer a cultura organizacional.',
  },
  {
    id: 4,
    title: 'Pesquisa de satisfação',
    description:
      'Descubra em tempo real o quanto seus clientes estão satisfeitos. Acompanhe métricas, analise tendências e crie estratégias para fortalecer a lealdade.',
  },
] as const;

export function Ferramentas() {
  return (
    <HomeSection.Root className="bg-darken flex min-h-screen flex-col justify-between gap-8 overflow-hidden text-white">
      <figure className="absolute top-0 right-0 bottom-0 left-0">
        <Image
          src={backgroundImage}
          width={1920}
          height={1080}
          alt=""
          className="min-h-screen object-cover"
        />
      </figure>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-30" />
      <div className="absolute right-0 bottom-0 left-0 h-1/2 bg-linear-to-t from-black/40 to-black/0" />
      <div className="relative container mx-auto">
        <header className="flex w-full flex-col items-start gap-4 px-4 lg:w-1/2">
          <HomeSection.Label>Nossas ferramentas</HomeSection.Label>
          <div className="flex flex-col items-start gap-4">
            <HomeSection.Headline className="w-full">
              Ferramentas inteligentes para transformar gestão em resultados
            </HomeSection.Headline>
            <HomeSection.Description className="w-full">
              Superar os limites das planilhas é o primeiro passo para a
              inovação. Nossos sistemas foram pensados para automatizar
              processos, aumentar a produtividade e dar à sua empresa mais
              eficiência. Cada ferramenta é desenvolvida sob medida para
              enfrentar os reais desafios de gestão e potencializar seus
              resultados.
            </HomeSection.Description>
          </div>
        </header>
      </div>
      <div className="relative container mx-auto">
        <ul className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-2 xl:grid-cols-4">
          {sistemas.map(({ id, title, description }) => (
            <li
              key={id}
              className="bg-darken/80 flex gap-4 rounded-md p-6 shadow-md backdrop-blur-[2px]"
            >
              <figure className="pt-2">
                <Image
                  src="/images/icone.svg"
                  width={50}
                  height={50}
                  className="h-[36px] w-[36px]"
                  alt=""
                />
              </figure>
              <div className="flex-1">
                <h4 className="mb-1 text-sm font-semibold">{title}</h4>
                <p className="text-sm">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </HomeSection.Root>
  );
}
