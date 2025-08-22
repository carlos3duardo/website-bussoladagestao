import Image from 'next/image';

import { PageTitle } from '@/components';

export default async function Page() {
  return (
    <main>
      <PageTitle title="Perfil comportamental" />
      <div className="px-4 py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="place-self-end">
              <div className="lg:aspect-vertical-banner relative flex aspect-video w-full flex-col justify-end overflow-hidden rounded-lg lg:w-[480px]">
                <Image
                  src="/images/page-teste-perfil.jpg"
                  alt=""
                  width={1280}
                  height={1920}
                  className="absolute top-0 left-0 h-full w-full object-cover"
                />
                <div className="from-darken to-darken/20 absolute top-0 left-0 h-full w-full bg-linear-to-t" />
              </div>
            </div>
            <div>
              <p className="my-6 indent-6">
                Identificar o perfil de sua equipe é um reqisito básico para
                poder conhecer todo o seu potencial.
              </p>
              <p className="my-6 indent-6">
                A <strong>Bússola da Gestão</strong> disponibiliza uma
                ferramenta de avaliação para identificar o perfil de cada um dos
                colaboradores de sua empresa. E o melhor: de forma gratuita.
              </p>
              <p className="my-6 indent-6">
                Escolha um dos métodos abaixo para identificar o perfil de cada
                um membro de sua força de trabalho.
              </p>

              <p className="my-6 indent-6">
                <em>Não temos modelos para o teste de perfil no momento.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
