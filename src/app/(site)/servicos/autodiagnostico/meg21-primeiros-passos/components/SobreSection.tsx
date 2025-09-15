import { SquareCheckBig } from 'lucide-react';

import { PageSection } from '@/components/ui';

export function SobreSection() {
  const topics = [
    'Liderança e propósito',
    'Estratégia e resultados',
    'Foco no cliente e partes interessadas',
    'Processo, inovação e digital',
    'Cultura, pessoas e competências',
    'Governança, ética e riscos',
    'Sustentabilidade e ESG',
    'Parcerias e ecosistemas',
  ] as const;
  return (
    <PageSection.Root>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <header className="flex flex-col items-start gap-4">
              <PageSection.Label>
                Modelo de excelência da Gestão
              </PageSection.Label>
              <div className="flex flex-col gap-4">
                <PageSection.Headline className="max-w-[720px]">
                  O que é a avaliação MEG21&reg;?
                </PageSection.Headline>
                <PageSection.Description className="w-full max-w-[720px]">
                  O MEG21&reg;, da Fundação Nacional da Qualidade, é um modelo
                  de referência para orientar organizações rumo à excelência em
                  gestão. Avaliamos princípios e fundamentos do MEG21&reg;,
                  analisando de forma integrada liderança, estratégia, clientes,
                  processos, pessoas, governança, sustentabilidade e ecossistema
                  de valor.
                </PageSection.Description>
              </div>
            </header>
            <div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                {topics.map((topic, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm font-medium text-balance"
                  >
                    <SquareCheckBig className="text-primary-500 h-4 w-4" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-primary-200 bg-primary-50 self-start rounded-xl border p-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold">Para quem é o MEG21&reg;?</h4>
              <ul className="flex flex-col gap-1">
                {[
                  'Empresas em crescimento que buscam estruturar a gestão',
                  'Organizações estabelecidas que querem evoluir performance e governança',
                  'Executivos, gestores de qualidade, PMOs e áreas de transformação',
                  'Negócios que desejam alinhar estratégia, processos e cultura',
                ].map((item, key) => (
                  <li key={key} className="flex items-start gap-2">
                    <span className="bg-primary-500 mt-[0.5rem] inline-block h-2 w-2 rounded-full" />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-primary-100 text-primary-500 rounded-md p-4 text-sm font-medium">
                Ao final, você recebe um retrato fiel da maturidade e as
                oportunidades priorizadas por impacto e esforço.
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection.Root>
  );
}
