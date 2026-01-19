import { Compass } from 'lucide-react';
import Image from 'next/image';

import { PageSection } from '@/components/ui';

export function RecursosSection() {
  return (
    <PageSection.Root className="bg-primary-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2">
          <header className="flex flex-col items-center gap-4 lg:items-start">
            <PageSection.Label>Recursos</PageSection.Label>
            <div className="flex flex-col items-center gap-4 lg:items-start">
              <PageSection.Headline className="max-w-[720px] text-center text-balance lg:text-start">
                O que você poderá fazer com a Universidade Corporativa
              </PageSection.Headline>
              <ul className="mt-6 flex flex-col gap-4">
                <li className="relative pl-6">
                  <figure className="absolute left-0 flex items-center">
                    <Compass size={18} className="text-primary-500" />
                  </figure>
                  <h4 className="leading-[18px] font-semibold">
                    Criação de trilhas de conhecimento
                  </h4>
                  <p className="text-base">
                    Você pode agrupar cursos de acordo com os conhecimentos
                    necessários para um cargo. O colaborador já conhecerá quais
                    cursos ele precisará fazer para desempenhar seu cargo.
                  </p>
                </li>
                <li className="relative pl-6">
                  <figure className="absolute left-0 flex items-center">
                    <Compass size={18} className="text-primary-500" />
                  </figure>
                  <h4 className="leading-[18px] font-semibold">
                    Catálogo de questões
                  </h4>
                  <p className="text-base">
                    Para a provas de cada módulo, você pode cadastrar quantas
                    questões desejar, e escolher a quantidade que será utilizada
                    em cada prova. As questões serão selecionadas
                    aleatoriamente.
                  </p>
                </li>
                <li className="relative pl-6">
                  <figure className="absolute left-0 flex items-center">
                    <Compass size={18} className="text-primary-500" />
                  </figure>
                  <h4 className="leading-[18px] font-semibold">
                    Monitoramento através de gráficos e relatórios
                  </h4>
                  <p className="text-base">
                    Acompanhe os cursos realizados por seus colaboradores, e
                    visualize quais colaboradores finalizaram o curso, os que
                    estão em andamento e os que ainda não se matricularam.
                  </p>
                </li>
                <li className="relative pl-6">
                  <figure className="absolute left-0 flex items-center">
                    <Compass size={18} className="text-primary-500" />
                  </figure>
                  <h4 className="leading-[18px] font-semibold">
                    Comece onde parou
                  </h4>
                  <p className="text-base">
                    Se o aluno interromper a visualização durante a reprodução
                    de um vídeo, ele poderá continuar a partir do ponto em que
                    parou.
                  </p>
                </li>
              </ul>
            </div>
          </header>
          <figure>
            <Image
              src="/images/laptop-universidade.png"
              width={980}
              height={1100}
              alt=""
            />
          </figure>
        </div>
      </div>
    </PageSection.Root>
  );
}
