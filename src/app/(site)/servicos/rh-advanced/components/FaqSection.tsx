'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { PageSection } from '@/components/ui';

export function FaqSection() {
  const [openFAQ, setOpenFAQ] = useState(-1);

  const faqs = [
    {
      q: 'Existe algum pré-requisito para usar a plataforma da Bússola da Gestão?',
      a: 'Sua empresa precisa possuir a descrição de cargos com as competências que cada colaborador precisa possuir para realizar o seu trabalho. Mas não se preocupe. A equipe da Bússola da Gestão pode lhe auxiliar neste processo de criação, também.',
    },
    {
      q: 'Minha empresa precisa possuir um setor de RH para usar a plataforma da Bússola da Gestão?',
      a: 'Não é pre-requisito. Porém, um setor de RH pode ajudar para elaborar melhor com as lideranças da empresa com um calendário com as ações voltadas ao desenvolvimento de seus colaboradores.',
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
                <Link href="/contato?assunto=rh-advanced">
                  <button className="bg-primary-500 hover:bg-primary-700 rounded-full px-4 py-2 text-sm font-medium text-white hover:cursor-pointer">
                    Pedir ajuda
                  </button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PageSection.Root>
  );
}
