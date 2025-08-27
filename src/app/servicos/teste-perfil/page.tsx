import Image from 'next/image';

import { PageContent, PageTitle } from '@/components';
import { Label } from '@/components/ui';

export default async function Page() {
  return (
    <main>
      <PageTitle title="Perfil comportamental" />
      <PageContent>
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-12">
            <div className="aspect-vertical-banner relative w-[480px] overflow-hidden rounded-lg">
              <Image
                src="/images/page-teste-perfil.jpg"
                alt=""
                width={1280}
                height={1920}
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
              <div className="from-darken to-darken/20 absolute top-0 left-0 h-full w-full bg-linear-to-t" />
            </div>
            <div className="aspect-vertical-banner w-[480px]">
              <Label>Teste de perfil</Label>
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
      </PageContent>
    </main>
  );
}
