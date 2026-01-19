'use client';

import 'swiper/css';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { PageSection } from '@/components/ui';

type DepoimentoProps = {
  id: string;
  testimonial: string[];
  author: string;
  company: string;
  avatarUrl: string;
};

const depoimentosList = [
  {
    id: '5b50a807-314f-40a0-82c7-481c7fbca029',
    testimonial: [
      'Antes de utilizarmos a Perfforme, enfrentávamos dificuldades como a falta de acompanhamento adequado, ausência de feedbacks e avaliações que muitas vezes não eram realizadas. Conhecemos a ferramenta através do antigo PPQ e da parceria com a Dental Gold, e nos interessamos por se tratar de uma solução completa de gestão, capaz de acompanhar de perto o desempenho dos nossos colaboradores.',
      'Desde 2019, passamos a utilizar a plataforma para avaliações de desempenho, avaliações de experiência e registro de fatos observados. A experiência tem sido extremamente positiva, trazendo não apenas maior organização, mas também a possibilidade de gerar indicadores consistentes de acompanhamento.',
      'Notamos ganhos claros em produtividade e transparência. Hoje, podemos dizer que evoluímos: antes utilizávamos muito o papel para controles manuais e, agora, contamos com uma solução digital que se tornou parte essencial do nosso processo de gestão de pessoas.',
    ],
    author: 'Francielton Oliveira',
    company: 'Casatudo',
    avatarUrl: '/images/avatars/avatar-01.jpg',
  },
  {
    id: '1393055e-5513-4324-8b10-b2be6cf6dc0f',
    testimonial: [
      'A plataforma da Bússola da Gestão nos proporcionou a automatização do nosso processo de Avaliação de Desempenho por Competências desde Abril de 2023.',
      'A qualidade, eficiência e usabilidade da plataforma tem sido fundamentais para aprimorar nossos processos interno e potencializar a gestão de talentos da nossa empresa. Notamos ganhos claros na otimização de tempo, qualidade das avaliações e PDI, gestão de dados através de relatórios customizados e produtividade',
      'A dedicação e profissionalismo da equipe de desenvolvimento e suporte tem demonstrado até agora são realmente notáveis e estamos muito satisfeitos com a parceira.',
    ],
    author: 'Mônica Cimonetti',
    company: 'Grupo BRF1',
    avatarUrl: '/images/avatars/avatar-02.jpg',
  },
  {
    id: 'fbae82f0-a269-4131-a337-07c48a5b7dd5',
    testimonial: [
      'Participar das mentorias coletivas está sendo uma experiência extremamente enriquecedora. O mais interessante desse formato é a criação de um ambiente seguro onde todos podemos compartilhar nossas experiências e aprender uns com os outros. Isso cria um clima de confiança, de apoio entre todos os participantes. Eles têm sido muito eficazes em direcionar nossas conversas e feedbacks para um crescimento mais real, mais realista.',
    ],
    author: 'Antonio Clerton',
    company: 'Gestor Administrativo',
    avatarUrl: '/images/avatars/avatar-03.jpg',
  },
  {
    id: 'b38c3779-487e-48e3-90aa-ecfe2caebdc2',
    testimonial: [
      'Estou aqui para parabenizar o trabalho realizado pela Bússola da Gestão, e todos os que estão envolvidos neste incrível projeto.',
      'Recentemente participei de uma mentoria coletiva, que reuniu líderes, gestores e empresários para falar sobre temas conexos ao mundo de liderança e ao dos negócios.',
    ],
    author: 'Alysson Onofre',
    company: 'Gestor de Pessoas e Treinador Empresarial',
    avatarUrl: '/images/avatars/avatar-04.jpg',
  },
] as DepoimentoProps[];

export function Depoimentos() {
  const [depoimentos, setDepoimentos] = useState<DepoimentoProps[]>([]);

  useEffect(() => {
    setDepoimentos(depoimentosList.toSorted(() => Math.random() - 0.5));
  }, []);

  return (
    <PageSection.Root>
      <header className="flex flex-col items-center gap-4">
        <PageSection.Label>Depoimentos</PageSection.Label>
        <div className="flex flex-col items-center gap-4 lg:w-2/3">
          <PageSection.Headline className="text-center">
            Histórias de sucesso com resultados reais de nossos clientes
            satisfeitos
          </PageSection.Headline>
        </div>
      </header>
      <div className="mx-auto mt-8 w-full max-w-[960px] px-4 md:px-6 xl:px-8">
        <ul className="flex flex-col gap-8">
          {depoimentos.map(({ id, testimonial, author, company }) => (
            <li
              key={id}
              className="from-primary-50 to-primary-100 relative flex flex-col gap-4 overflow-hidden rounded-lg bg-white bg-gradient-to-br p-8"
            >
              <Image
                src="/images/icons/quote.svg"
                width={320}
                height={320}
                alt=""
                className="absolute -top-16 -right-8 opacity-5"
              />
              <article className="relative flex flex-col gap-4">
                {testimonial.map((item, index) => (
                  <p key={[id, index].join('.')} className="text-base">
                    {item}
                  </p>
                ))}
              </article>
              <div className="leading-tight">
                <strong>{author}</strong>
                <br />
                <span className="text-sm font-medium opacity-60">
                  {company}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageSection.Root>
  );
}
