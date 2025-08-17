import Image from 'next/image';

import { HomeSection } from '@/components/ui';

import backgroundImage from './assets/images/bg-sistema-05.png';

const sistemas = [
  {
    id: 1,
    title: 'Diagnóstico corporativo',
    description:
      'Faça um auto-diagnóstico de sua empresa, avalie os pontos de melhoria, crie planos de ação e gerencie tudo no ambiente da plataforma.',
  },
  {
    id: 2,
    title: 'Desenvolvimento Humano',
    description:
      'Avalie sua equipe, realize feedbacks com seus colaboradores e construa seus planos de desenvolvimento individual.',
  },
  {
    id: 3,
    title: 'Universidade corporativa',
    description:
      'Crie uma universidade corporativa para sua organização, construindo um ambiente de aprendizado a partir de conteúdos específicos para o desenvolvimento de seus colaboradores.',
  },
  {
    id: 4,
    title: 'Pesquisa de satisfação',
    description:
      'Meça e acompanhe o grau de satisfação em tempo real do seu atendimento, para desenvolver um plano de lealdade para os seus clientes',
  },
] as const;

export function Ferramentas() {
  return (
    <HomeSection.Root className="flex min-h-screen flex-col justify-between overflow-hidden bg-white">
      <figure className="absolute top-0 right-0 bottom-0 left-0">
        <Image
          src={backgroundImage}
          width={1920}
          height={1080}
          alt=""
          className="min-h-screen object-cover"
        />
      </figure>
      <div className="absolute right-0 bottom-0 left-0 h-1/2 bg-linear-to-t from-white/70 to-white/0" />
      <div className="relative container mx-auto">
        <header className="flex w-full flex-col items-start gap-4 lg:w-1/2">
          <HomeSection.Label>Nossas ferramentas</HomeSection.Label>
          <div className="flex flex-col items-start gap-4">
            <HomeSection.Headline className="w-full">
              Recursos poderos para o seu negócio
            </HomeSection.Headline>
            <HomeSection.Description className="w-full">
              Não fique limitado à planilhas. Nossas ferramentas ajudam a
              automatizar tarefas e aumentar a produtividade. São sistemas
              desenvolvidos sob medida para enfrentar os desafios da gestão
              presentem em seu negócio.
            </HomeSection.Description>
          </div>
        </header>
      </div>
      <div className="relative container mx-auto">
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {sistemas.map(({ id, title, description }) => (
            <li
              key={id}
              className="flex gap-4 rounded-md bg-white/70 p-6 shadow-md backdrop-blur-[2px]"
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
