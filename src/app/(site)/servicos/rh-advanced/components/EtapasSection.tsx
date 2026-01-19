import {
  Binoculars,
  CalendarCheck,
  HandHelping,
  Layers,
  ListTodo,
  SquareCheckBig,
  Target,
} from 'lucide-react';

import { PageSection } from '@/components/ui';

export function EtapasSection() {
  const features = [
    {
      id: 1,
      icon: Binoculars,
      title: 'Mentoria Coletiva',
      description: (
        <>
          A mentoria aborda um dos temas do ciclo (por exemplo, “Planejar
          Pessoas” , “Agregar Pessoas” etc.), apresentando conceitos, boas
          práticas e ferramentas aplicáveis
        </>
      ),
    },
    {
      id: 2,
      icon: HandHelping,
      title: 'Aulas on demand',
      description: (
        <>
          Após mentoria, o terá acesso ao conteúdo do programa, como vídeos,
          planilhas, documentos, etc, que irá auxiliar na implementação prática
          dentro da empresa
        </>
      ),
    },
    {
      id: 3,
      icon: Target,
      title: 'Implantação no sistema',
      description: (
        <>
          Nessa etapa, o participante vê como o conteúdo abordado na mentoria se
          traduz no sistema, explorando as funcionalidades correspondentes.
        </>
      ),
    },
    {
      id: 4,
      icon: ListTodo,
      title: 'Checklist gameficado',
      description: (
        <>
          Por fim, cada tema é acompanhado de um checklist de ações práticas,
          que orienta o participante sobre o que precisa ser feito para aplicar
          o método com sucesso.
        </>
      ),
    },
  ] as const;

  return (
    <PageSection.Root>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-12 lg:px-8">
        <header className="flex flex-col items-center gap-4 lg:col-span-6 lg:items-start xl:col-span-5">
          <PageSection.Label>O Método</PageSection.Label>
          <div className="flex flex-col items-center gap-4">
            <PageSection.Headline className="text-center text-balance lg:text-left">
              As 4 etapas do método
            </PageSection.Headline>
            <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
              Com a aplicação de nosso diagnóstico, a sua empresa obtém um
              relatório detalhado, visível e claro sobre o estado do negócio e a
              capacidade de melhoria.
            </PageSection.Description>
            <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
              Com os dados disponibilizs ados, você será capaz de escolher os
              próximos passos para diminuir ou eliminar seus <em>gaps</em>&nbsp;
              ou otimizar ainda mais seus processos.
            </PageSection.Description>
          </div>
        </header>
        <div className="lg:col-span-6 xl:col-span-7">
          <div className="grid grid-cols-2">
            {features.map(({ id, icon: Icon, title, description }, i) => (
              <div key={i} className="flex flex-col gap-2 p-6">
                <header className="flex items-center gap-2">
                  <span className="bg-primary-500 flex h-6 w-6 items-center justify-center rounded-full text-left text-xs font-bold text-white">
                    {id}
                  </span>
                  <h4 className="text-left text-lg font-semibold text-gray-900">
                    {title}
                  </h4>
                </header>
                <p className="text-left text-sm text-balance text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection.Root>
  );
}
