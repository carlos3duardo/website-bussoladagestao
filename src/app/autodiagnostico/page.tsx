import Image from 'next/image';

import { PageTitle } from '@/components';
import { Label } from '@/components/ui';

export default async function Page() {
  return (
    <main>
      <PageTitle title="Autodiagnóstico" />
      <div className="px-4 py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="place-self-end">
              <div className="lg:aspect-vertical-banner relative flex aspect-video w-full flex-col justify-end overflow-hidden rounded-lg lg:w-[480px]">
                <Image
                  src="/images/page-autodiagnostico.jpg"
                  alt=""
                  width={1280}
                  height={1920}
                  className="absolute top-0 left-0 h-full w-full object-cover"
                />
                <div className="from-darken to-darken/20 absolute top-0 left-0 h-full w-full bg-linear-to-t" />
              </div>
            </div>
            <div>
              <Label>Autodiagnóstico</Label>
              <p className="my-6 indent-6">
                A <strong>Bússola da Gestão</strong>, em concordância com as
                melhores práticas do mercado, disponibiliza uma ferramenta de
                diagnóstico para avaliar o nível de maturidade de gestão da sua
                empresa. Este diagnóstico lhe dará uma visão geral sobre a sua
                organização e o ajudará a identificar algumas lacunas de seus
                processos.
              </p>
              <p className="my-6 indent-6">
                Este modelo de avaliação está inserido em uma plataforma
                extremamente intuitiva que poderá ser acessada a qualquer
                momento!
              </p>
              <p className="my-6 indent-6">
                Se você deseja inovar e se fixar no mercado, comece dando os
                seus primeiros passos fazendo esta avaliação!
              </p>

              <p className="my-6 indent-6">
                <em>Não temos modelos para um autodiagnóstico no momento.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
