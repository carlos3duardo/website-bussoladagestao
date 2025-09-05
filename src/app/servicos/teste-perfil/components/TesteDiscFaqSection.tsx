'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { PageSection } from '@/components/ui';

export function TesteDiscFaqSection() {
  const [openFAQ, setOpenFAQ] = useState(-1);

  const faqs = [
    {
      q: 'O que é o teste DISC?',
      a: 'O DISC é uma metodologia de análise comportamental que identifica quatro estilos principais: Dominância, Influência, Estabilidade e Conformidade. Ele ajuda a entender como cada pessoa age, se comunica e toma decisões.',
    },
    {
      q: 'O teste pode ser aplicado em empresas?',
      a: 'Sim! A empresa recebe um link exclusivo para que seus colaboradores respondam o questionário. No final, é gerado um relatório individual para cada pessoa e também um panorama comportamental da equipe.',
    },
    {
      q: 'Quanto tempo leva para responder?',
      a: 'O teste é rápido e intuitivo, geralmente leva entre 10 a 15 minutos para ser concluído.',
    },
    {
      q: 'Quem pode fazer o teste?',
      a: 'Qualquer pessoa! Pode ser feito de forma individual para autoconhecimento ou em grupo no ambiente corporativo para melhorar a comunicação e o trabalho em equipe.',
    },
    {
      q: 'Receberei um relatório detalhado?',
      a: 'Sim, ao final você recebe um relatório completo com pontos fortes, áreas de atenção e sugestões de como aplicar seu perfil no dia a dia.',
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

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-24">
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
            <div className="bg-primary-50 border-primary-100 flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex flex-col">
                <h3 className="text-primary-300 text-center text-lg font-semibold lg:text-left">
                  Possui uma pergunta?
                </h3>
                <p className="text-center text-base text-balance text-slate-600 lg:text-left">
                  Não encotrou a resposta que queria? Nos envie uma mensagem que
                  nossa equipe irá responder.
                </p>
              </div>
              <div className="text-center lg:text-left">
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
