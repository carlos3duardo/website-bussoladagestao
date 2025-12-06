import { Compass } from 'lucide-react';

import { PageSection } from '@/components/ui';

export function ModuloUniversidadeCorporativa() {
  return (
    <PageSection.Root className="bg-linear-to-br from-neutral-100 to-neutral-200 py-0">
      <div className="grid w-full lg:grid-cols-2">
        <div className="w-full justify-items-end">
          <div className="flex w-full flex-col gap-4 px-4 py-24 lg:max-w-[768px] xl:px-6">
            <PageSection.Headline className="max-w-[960px] text-center text-balance lg:text-left">
              Módulo de Treinamento e Capacitação
            </PageSection.Headline>
            <PageSection.Paragraph className="text-left text-lg">
              Crie uma universidade corporativa para sua organização,
              construindo um ambiente de aprendizado a partir de conteúdos
              específicos para o desenvolvimento de seus colaboradores.
            </PageSection.Paragraph>
            <h3 className="text-xl font-semibold lg:text-left">
              Principais recursos
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2">
                <figure>
                  <Compass size={18} className="text-primary-500" />
                </figure>
                <div>
                  <strong>Emissão de certificado de conclusão</strong>
                  <br />
                  Ao concluir o curso, seu colaborador recebe um certificado de
                  conclusão com informações sobre as aulas assistidas, carga
                  horária e data de conclusão.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <figure>
                  <Compass size={18} className="text-primary-500" />
                </figure>
                <div>
                  <strong>Criação de trilhas de aprendizado</strong>
                  <br />
                  Você pode criar trilhas de aprendizado personalizadas para
                  cargos específicos ou direcionar conteúdos para todos os
                  colaboradores.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <figure>
                  <Compass size={18} className="text-primary-500" />
                </figure>
                <div>
                  <strong>Aplicação de provas</strong>
                  <br />
                  As provas podem ser aplicadas aos colaboradores, permitindo
                  avaliação dos conhecimentos adquiridos durante o curso.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full py-8 lg:place-self-center">
          <div className="w-full bg-[url(/images/modulo-avaliacao-v2.png)] bg-contain bg-center bg-no-repeat sm:h-[360px]"></div>
        </div>
      </div>
    </PageSection.Root>
  );
}
