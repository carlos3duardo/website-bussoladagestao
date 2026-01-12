import Image from 'next/image';

import { PageSection } from '@/components/ui';

export function HistoriaSection() {
  const metricas = [
    {
      id: 1,
      numero: 317,
      descricao: (
        <>
          Clientes
          <br />
          satisfeitos
        </>
      ),
    },
    {
      id: 2,
      numero: 448,
      descricao: (
        <>
          Projetos
          <br />
          realizados
        </>
      ),
    },
    {
      id: 3,
      numero: 12,
      descricao: (
        <>
          Anos de
          <br />
          experiência
        </>
      ),
    },
    {
      id: 4,
      numero: 412,
      descricao: (
        <>
          Diagnósticos
          <br />
          realizados
        </>
      ),
    },
  ] as const;

  return (
    <PageSection.Root className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <header className="flex flex-col items-center gap-4 lg:items-start">
              <PageSection.Label>Números</PageSection.Label>
              <div className="flex flex-col items-center gap-4 lg:items-start">
                <PageSection.Headline className="max-w-[720px] text-center text-balance lg:text-start">
                  Experiência que se transforma em números
                </PageSection.Headline>
                <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
                  Ao longo dos anos, acumulamos um vasto conhecimento e
                  experiência prática, traduzidos em números que refletem nossa
                  dedicação e capacidade de resolver desafios reais. Cada
                  projeto, cada hora investida e cada cliente atendido
                  representa não apenas resultados, mas também evolução contínua
                  em nossa forma de entregar valor.
                </PageSection.Description>
                <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
                  Criamos parcerias com empresas e mentes que compartilham nossa
                  dedicação, visão e comprometimento com o sucesso de seus
                  clientes e fornecedores. Criamos vínculos com organizações
                  FNQ, Abracinov, Movimento Alagoas Competitiva, Energisa, além
                  de especialistas de diversas empresas.
                </PageSection.Description>
                <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
                  Não apenas reunimos talentos, como construímos juntos um novo
                  modelo de diagnóstico para algumas dessas empresas,
                  enriquecendo assim nosso <em>know-how</em> e nossa base de
                  conhecimento e a nossa experiência em busca da melhoria
                  contínua.
                </PageSection.Description>
              </div>
            </header>
            <div>
              <div className="grid w-full grid-cols-2 gap-8">
                {metricas.map(({ id, numero, descricao }) => (
                  <div
                    key={id}
                    className="flex flex-col items-center justify-center gap-0 md:flex-row md:gap-4 lg:justify-start"
                  >
                    <span className="text-5xl font-bold">{numero}</span>
                    <span className="text-center text-base leading-tight font-medium text-balance md:text-left">
                      {descricao}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <figure className="flex items-center justify-center rounded-2xl">
            <Image
              src="/images/business-charts-02.svg"
              width={1920}
              height={1645}
              alt=""
              className="w-[80%] object-contain md:w-[60%px] lg:w-full"
            />
          </figure>
        </div>
      </div>
    </PageSection.Root>
  );
}
