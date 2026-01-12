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

export function BeneficiosSection() {
  const features = [
    {
      icon: Binoculars,
      title: 'Visão 360º do negócio',
      description: (
        <>
          Obtenha uma perspectiva completa e integrada de todos os processos da
          sua empresa, identificando gargalos ocultos e oportunidades de
          melhoria que passariam despercebidas no dia a dia operacional.
        </>
      ),
    },
    {
      icon: HandHelping,
      title: 'Decisões baseadas em dados',
      description: (
        <>
          Substitua o "achismo" por indicadores precisos. Nosso relatório
          detalhado oferece uma pontuação clara por categoria, permitindo que
          gestores foquem investimentos onde o retorno será maior.
        </>
      ),
    },
    {
      icon: Target,
      title: 'Planos de ação 5W2H',
      description: (
        <>
          Transforme diagnósticos em resultados práticos. Criamos roteiros
          detalhados que definem o que, por que, quem, onde, quando, como e
          quanto custará cada melhoria necessária na sua organização.
        </>
      ),
    },
    {
      icon: ListTodo,
      title: 'Agilidade com kanban',
      description: (
        <>
          Monitore a evolução das melhorias através de quadros visuais
          dinâmicos. O sistema permite um acompanhamento intuitivo do progresso,
          facilitando a gestão de tarefas e o cumprimento de prazos.
        </>
      ),
    },
    {
      icon: CalendarCheck,
      title: 'Identificação de gaps',
      description: (
        <>
          Descubra exatamente em quais categorias sua empresa está abaixo da
          média do mercado. O diagnóstico aponta as falhas críticas, permitindo
          correções rápidas antes que se tornem problemas graves.
        </>
      ),
    },
    {
      icon: SquareCheckBig,
      title: 'Cultura da excelência',
      description: (
        <>
          Promova uma mentalidade de melhoria contínua em toda a equipe. O uso
          de modelos de excelência reconhecidos eleva o padrão de entrega e
          engaja os colaboradores em torno de metas estruturadas.
        </>
      ),
    },
  ] as const;

  return (
    <PageSection.Root className="bg-primary-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-12 lg:px-8">
        <header className="flex flex-col items-center gap-4 lg:col-span-6 lg:items-start xl:col-span-5">
          <PageSection.Label>Benefícios</PageSection.Label>
          <div className="flex flex-col items-center gap-4">
            <PageSection.Headline className="text-center text-balance lg:text-left">
              O que sua empresa ganha com o Diagnóstico Corporativo
            </PageSection.Headline>
            <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
              Com a aplicação de nosso diagnóstico, a sua empresa obtém um
              relatório detalhado, visível e claro sobre o estado do negócio e a
              capacidade de melhoria.
            </PageSection.Description>
            <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
              Com os dados disponibilizados, você será capaz de escolher os
              próximos passos para diminuir ou eliminar seus <em>gaps</em>&nbsp;
              ou otimizar ainda mais seus processos.
            </PageSection.Description>
          </div>
        </header>
        <div className="lg:col-span-6 xl:col-span-7">
          <div className="grid grid-cols-2">
            {features.map(({ icon: Icon, title, description }, i) => (
              <div key={i} className="flex flex-col gap-2 p-6">
                <header className="flex flex-col items-start gap-1 lg:flex-row lg:gap-2">
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
