'use client';

import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HomeSection } from '@/components/ui';

import styles from './Depoimentos.module.css';

type DepoimentoProps = {
  id: string;
  testimonial: string;
  author: string;
  company: string;
  avatarUrl: string;
};

type ViewProps = {
  testimonial: string;
  author: string;
  company: string;
  avatarUrl: string;
};

function Depoimento({ testimonial, author, company }: ViewProps) {
  const [expandido, setExpandido] = useState(false);

  const limit = 420;
  const precisaCortar = testimonial.length > limit;
  const textoExibido =
    !expandido && precisaCortar
      ? testimonial.slice(0, limit) + '... '
      : testimonial;

  return (
    <div className="flex h-full flex-col rounded-md bg-white">
      <div className="flex-1 border-b border-b-slate-200 p-6">
        <span className="" dangerouslySetInnerHTML={{ __html: textoExibido }} />
        {precisaCortar && !expandido && (
          <span
            className="text-primary-600 hover:cursor-pointer hover:underline"
            onClick={() => setExpandido(true)}
            aria-label="Ler depoimento completo"
          >
            {' '}
            mostrar mais
          </span>
        )}
        {expandido && precisaCortar && (
          <span
            className="text-primary-600 hover:cursor-pointer hover:underline"
            onClick={() => setExpandido(false)}
            aria-label="Mostrar menos"
          >
            {' '}
            mostrar menos
          </span>
        )}
      </div>
      <footer className="flex flex-row items-center gap-4 p-6">
        <figure className="bg-primary-500 relative flex h-16 w-16 items-center justify-center rounded-full">
          <span className="text-white">
            <Quote size={36} />
          </span>
        </figure>
        <div className="flex-1">
          <strong className="text-lg font-semibold">{author}</strong>
          <br />
          <span className="text-primary-500">{company}</span>
        </div>
      </footer>
    </div>
  );
}

export function Depoimentos() {
  const [depoimentos, setDepoimentos] = useState<DepoimentoProps[]>([]);

  useEffect(() => {
    setDepoimentos(
      [
        {
          id: '4ea6a91e-30fb-4faf-8365-28a4c59cb478',
          testimonial: `"Antes de utilizarmos a Perfforme, enfrentávamos
            dificuldades como a falta de acompanhamento adequado, ausência
            de feedbacks e avaliações que muitas vezes não eram realizadas.
            Conhecemos a ferramenta através do antigo PPQ e da parceria com
            a Dental Gold, e nos interessamos por se tratar de uma solução
            completa de gestão, capaz de acompanhar de perto o
            desempenho dos nossos colaboradores.
            <br /><br />
            Desde 2019, passamos a utilizar a plataforma para avaliações de
            desempenho, avaliações de experiência e registro de fatos
            observados. A experiência tem sido extremamente positiva,
            trazendo não apenas maior organização, mas também a
            possibilidade de gerar indicadores consistentes de
            acompanhamento.<br />
            Notamos ganhos claros em produtividade e transparência.
            Hoje, podemos dizer que evoluímos: antes utilizávamos muito o
            papel para controles manuais e, agora, contamos com uma
            solução digital que se tornou parte essencial do nosso
            processo de gestão de pessoas."`,
          author: 'Francielton Oliveira',
          company: 'Casatudo',
          avatarUrl: '/images/avatars/avatar-01.jpg',
        },
        {
          id: '52230cf8-ba21-4a8a-b459-9c9be563ae30',
          testimonial: `"A plataforma da Bússola da Gestão nos proporcionou a
            automatização do nosso processo de Avaliação de Desempenho
            por Competências desde Abril de 2023.
            <br /><br />
            A qualidade, eficiência e usabilidade da plataforma tem sido
            fundamentais para aprimorar nossos processos interno e
            potencializar a gestão de talentos da nossa empresa. Notamos
            ganhos claros na otimização de tempo, qualidade das avaliações e
            PDI,  gestão de dados através de relatórios customizados
            e produtividade.
            <br /><br />
            A dedicação e profissionalismo da equipe de desenvolvimento e
            suporte tem demonstrado até agora são realmente notáveis
            e estamos muito satisfeitos com a parceira."`,
          author: 'Mônica Cimonetti',
          company: 'Grupo BRF1',
          avatarUrl: '/images/avatars/avatar-02.jpg',
        },
        {
          id: '97a96a3e-dee2-4bb2-a6b3-938232d97fdf',
          testimonial: `"Participar das mentorias coletivas está sendo
            uma experiência extremamente enriquecedora. O mais
            interessante desse formato é a criação de um ambiente
            seguro onde todos podemos compartilhar
            nossas experiências e aprender uns com os outros.
            Isso cria um clima de confiança, de apoio entre todos
            os participantes. Eles têm sido muito eficazes em
            direcionar nossas conversas e feedbacks para um
            crescimento mais real, mais realista."`,
          author: 'Antonio Clerton',
          company: 'Gestor Administrativo',
          avatarUrl: '/images/avatars/avatar-03.jpg',
        },
        {
          id: 'b38c3779-487e-48e3-90aa-ecfe2caebdc2',
          testimonial: `"Estou aqui para parabenizar o trabalho
            realizado pela Bússola da Gestão, e todos os que
            estão envolvidos neste incrível projeto.
            <br /><br />
            Recentemente participei de uma mentoria coletiva, que reuniu
            líderes, gestores e empresários para falar sobre temas
            conexos ao mundo de liderança e ao dos negócios."`,
          author: 'Alysson Onofre',
          company: 'Gestor de Pessoas e Treinador Empresarial',
          avatarUrl: '/images/avatars/avatar-04.jpg',
        },
      ].toSorted(() => Math.random() - 0.5),
    );
  }, []);

  return (
    <HomeSection.Root>
      <div className="relative container mx-auto flex flex-col gap-20">
        <header className="flex flex-col items-center gap-4 px-4">
          <HomeSection.Label>Depoimentos</HomeSection.Label>
          <div className="flex flex-col items-center gap-4">
            <HomeSection.Headline className="text-center text-balance">
              O que as pessoas falam de nós
            </HomeSection.Headline>
            <HomeSection.Description className="w-full max-w-[600px] text-center">
              Nosso trabalho faz a diferença na vida das pessoas e na jornada de
              suas empresas. Junte-se a nós para superar os desafios e alcancar
              o sucesso.
            </HomeSection.Description>
          </div>
        </header>
        <div className="mx-auto w-[380px] overflow-hidden px-4 md:w-[740px] xl:w-[1024px] 2xl:w-[1280px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={8}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop
            breakpoints={{
              '768': {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              '1024': {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className={styles.mySwiper}
            modules={[Autoplay]}
          >
            {depoimentos.map((depoimento) => (
              <SwiperSlide key={depoimento.id} className="swiper-slide">
                <Depoimento
                  testimonial={depoimento.testimonial}
                  author={depoimento.author}
                  company={depoimento.company}
                  avatarUrl={depoimento.avatarUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </HomeSection.Root>
  );
}
