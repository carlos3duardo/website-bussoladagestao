'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { PageSection } from '@/components/ui';

export function FaqSection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      q: 'Quanto tempo leva a aplicação',
      a: 'Geralmente 10–15 minutos. O questionário é objetivo e direto, com escala de quatro níveis de aderência.',
    },
    {
      q: 'Como é calculado o score',
      a: 'Cada pergunta vale pontos por nível de aderência. As notas são agregadas por dimensão (Estratégia, Clientes & Mercado, Produtos & Processos, Financeiro, Pessoas e Informação) e formam um score geral.',
    },
    {
      q: 'Para quem é indicado',
      a: 'PMEs que buscam clareza de prioridades e tração, e também grandes empresas que desejam um termômetro ágil do modelo de negócio.',
    },
    {
      q: 'O diagnóstico é inspirado no BMC',
      a: 'Sim. É inspirado no Business Model Canvas (Strategyzer&reg;) e ampliado com dimensões de execução e gestão.',
    },
    {
      q: 'Como é gerado o relatório de feedback',
      a: 'Cada dimensão apresenta um score geral, e também uma tabela de notas por pergunta. O relatório tem uma introdução e conclusão, e também uma seção de recomendações, gerado pela nossa ferramenta de Inteligência Artificial.',
    },
  ] as const;
  return (
    <PageSection.Root>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <header className="flex flex-col items-center gap-4">
          <PageSection.Label>Perguntas frequentes</PageSection.Label>
          <div className="flex flex-col items-center gap-4">
            <PageSection.Headline className="max-w-[720px] text-center text-balance">
              Dúvidas comuns
            </PageSection.Headline>
          </div>
        </header>

        <div className="mt-8 flex flex-col lg:flex-row lg:gap-24">
          <ul className="divide-primary-200 border-primary-200 w-full divide-y lg:w-3/4">
            {faqs.map((faq, key) => (
              <li
                key={key}
                className="group px-6 py-5 transition-all duration-200 hover:cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === key ? -1 : key)}
              >
                <div
                  data-slot="question"
                  className="group-hover:text-primary-500 flex items-center gap-2 transition-all duration-200"
                >
                  <span
                    className={twMerge(
                      'font-bold',
                      openFAQ === key && 'text-primary-500',
                    )}
                  >
                    {faq.q}
                  </span>
                  {openFAQ === key ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>
                {openFAQ === key && (
                  <div
                    data-slot="answer"
                    className="mt-2 text-slate-500"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                )}
              </li>
            ))}
          </ul>
          <aside className="w-full lg:w-1/4">
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="text-primary-300 text-lg font-semibold">
                  Possui uma pergunta?
                </h3>
                <p className="text-base text-slate-600">
                  Não encotrou a resposta que queria? Nos envie uma mensagem que
                  nossa equipe irá responder.
                </p>
              </div>
              <div>
                <button className="bg-primary-500 hover:bg-primary-700 rounded-full px-4 py-2 text-sm font-medium text-white hover:cursor-pointer">
                  Pedir ajuda
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PageSection.Root>
  );
}
