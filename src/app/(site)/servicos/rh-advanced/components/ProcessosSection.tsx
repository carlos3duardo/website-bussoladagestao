import { PageSection } from '@/components/ui';
import { color } from 'framer-motion';

export function ProcessosSection() {
  const processos = [
    {
      id: 1,
      title: 'Planejar pessoas',
      color: '#ba302d',
      description: (
        <>
          Identificação das competências estratégicas e alinhamento ao propósito
          e objetivos da organização.
        </>
      ),
    },
    {
      id: 2,
      title: 'Agregar pessoas',
      color: '#008cc2',
      description: (
        <>
          Recrutamento e seleção com base nas competências e na cultura
          organizacional.
        </>
      ),
    },
    {
      id: 3,
      title: 'Alocar pessoas',
      color: '#fbb62a',
      description: (
        <>Desenho de cargos, funções, atribuições e critérios de avaliação.</>
      ),
    },
    {
      id: 4,
      title: 'Recompensar pessoas',
      color: '#9fc200',
      description: (
        <>
          Implementação de políticas de reconhecimento, remuneração e
          benefícios.
        </>
      ),
    },

    {
      id: 5,
      title: 'Desenvolver pessoas',
      color: '#70b85a',
      description: (
        <>
          Capacitação profissional e pessoal. Programas de treinamento,
          desenvolvimento, educação corporativa e gestão das competências.
        </>
      ),
    },
    {
      id: 6,
      title: 'Manter pessoas',
      color: '#5fa4ad',
      description: (
        <>
          Criar condições ambientais e psicologicas satisfatórias. Gestão da
          cultura, clima, qualidade de vida e relações interpessoais.
        </>
      ),
    },
    {
      id: 7,
      title: 'Monitorar pessoas',
      color: '#6181a9',
      description: <>Acompanhamento de indicadores</>,
    },
    {
      id: 8,
      title: 'Redimensionar pessoas',
      color: '#6362a6',
      description: <>Ações de orientação e recolocação de talentos</>,
    },
  ] as const;
  return (
    <PageSection.Root className="bg-primary-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <header className="flex flex-col items-center gap-4">
          <PageSection.Label>O Método</PageSection.Label>
          <div className="flex flex-col items-center gap-4">
            <PageSection.Headline className="max-w-[720px] text-center text-balance">
              Gestão de Pessoas em 8 processos
            </PageSection.Headline>
          </div>
        </header>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processos.map(({ id, title, color, description }) => (
            <li key={id} className="">
              <header
                className="relative flex skew-x-[-21deg] items-center justify-center rounded-lg p-4"
                style={{ backgroundColor: color }}
              >
                <h4 className="skew-x-[21deg] text-sm font-semibold text-white uppercase lg:text-base">
                  <span>{title}</span>
                </h4>
              </header>
              <p className="p-4 text-center text-sm text-balance text-gray-600 lg:text-left">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </PageSection.Root>
  );
}
