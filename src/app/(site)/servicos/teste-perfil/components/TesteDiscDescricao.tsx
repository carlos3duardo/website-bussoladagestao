'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Award, Leaf, PencilRuler, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { PageSection } from '@/components/ui';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1280);
    check(); // Verifica na montagem
    window.addEventListener('resize', check); // Adiciona listener para redimensionamento
    return () => window.removeEventListener('resize', check); // Limpa o listener
  }, []);

  return isDesktop;
}

const perfis = [
  {
    key: 'D',
    title: 'Dominância',
    icon: Award,
    description:
      'Diretos, focados em resultados e sem medo de desafios, assumem o controle e resolvem problemas com rapidez. Energéticos e práticos, prosperam em ambientes dinâmicos, onde metas claras e decisões rápidas fazem a diferença.',
    traits: ['Diretas', 'Focadas em resultado', 'Energéticas', 'Práticas'],
    roles: [
      'CEO / Diretor Executivo',
      'Gestor de Projetos',
      'Executivo(a) de Vendas',
      'Consultor(a) Estratégico(a)',
      'Oficial Militar',
    ],
    bgColor: 'from-red-50 to-red-100',
    bgImageUrl: '/images/disc-dominant.jpg',
  },
  {
    key: 'I',
    title: 'Influência',
    icon: Sparkles,
    description:
      'Alegres, comunicativos e persuasivos, criam conexões com facilidade e inspiram quem está ao redor. Com otimismo e criatividade, elevam o engajamento da equipe e brilham em contextos sociais que valorizam reconhecimento.',
    traits: ['Comunicativo', 'Persuasivo', 'Carismático', 'Motivador'],
    roles: [
      'Marketing',
      'Publicidade',
      'Relações Públicas',
      'Representante comercial',
      'Palestrante',
      'Host de eventos',
    ],
    bgColor: 'from-yellow-50 to-amber-100',
    bgImageUrl: '/images/disc-influence.jpg',
  },
  {
    key: 'S',
    title: 'Estabilidade',
    icon: Leaf,
    description:
      'Calmos, colaborativos e confiáveis, valorizam harmonia, lealdade e segurança no ambiente de trabalho. Excelentes ouvintes e parceiros atentos, sustentam processos e mantêm o time unido mesmo diante de mudanças.',
    traits: ['Paciente', 'Colaborativo', 'Confiável', 'Empático'],
    roles: [
      'Enfermagem',
      'Professor',
      'Relações Humanas',
      'Assistente Administrativo',
      'Técnico(a) de Processos',
    ],
    bgColor: 'from-green-50 to-emerald-100',
    bgImageUrl: '/images/disc-steadiness.jpg',
  },
  {
    key: 'C',
    title: 'Conformidade',
    icon: PencilRuler,
    description:
      'Analíticos, precisos e organizados, buscam qualidade, lógica e estrutura em tudo o que fazem. Tomam decisões baseadas em dados e mantêm padrões elevados, garantindo rigor e excelência em cada etapa do trabalho.',
    traits: ['Analítico', 'Detalhista', 'Estruturado', 'Preciso'],
    roles: [
      'Contador',
      'Auditor',
      'Engenheiro',
      'Desenvolvedor(a) de Software',
      'Pesquisador',
      'Cientista de Dados',
      'Jurídico',
    ],
    bgColor: 'from-blue-50 to-sky-100',
    bgImageUrl: '/images/disc-compliance.jpg',
  },
] as const;

export function TesteDiscDescricao() {
  const [activeProfile, setActiveProfile] = useState<string | undefined>(
    undefined,
  );

  const isDesktop = useIsDesktop(); // Use o hook aqui

  const handleProfileHover = useCallback((key: string) => {
    setActiveProfile(key);
  }, []);

  return (
    <PageSection.Root className="pb-0">
      <div className="mx-auto max-w-7xl px-4">
        <header className="flex flex-col items-center gap-4">
          <PageSection.Label>O que é</PageSection.Label>
          <div className="flex flex-col gap-4">
            <PageSection.Headline className="max-w-[720px] text-center text-balance">
              O que é o teste DISC?
            </PageSection.Headline>
            <PageSection.Description className="w-full max-w-[720px] text-center text-balance">
              Criada em 1928 pelo psicólogo William Moulton Marston, o teste
              DISC é um teste de perfil comportamental que identifica o perfil
              de uma pessoa com base em quatro traços principais:{' '}
              <strong>Dominância</strong>, <strong>Influência</strong>,{' '}
              <strong>Estabilidade</strong> e <strong>Conformidade</strong>.
              Estas palavras, em inglês, formam o acrônimo DISC (<em>Domain</em>
              , <em>Influence</em>, <em>Steadiness</em> e <em>Compliance</em>).
              <br />
              <br />
              Através de um questionário com perguntas simples, as respostas
              fornecidas geram pontos que indicam comportamento e competência da
              pessoa avaliada. O resultado revela uma característica dominante
              do indivíduo.
              <br />
              <br />
              De posse dessas informações, os gestores podem identificar e
              entender entenderem melhor seus comportamentos, aprimorar o
              trabalho em equipe e otimizar a gestão de pessoas.
            </PageSection.Description>
          </div>
        </header>
      </div>
      <div className="relative mt-12 grid overflow-hidden md:grid-cols-2 xl:grid-cols-4">
        {isDesktop && (
          <figure className="absolute top-0 left-0 h-full w-full bg-[url(/images/team-work.jpg)] bg-cover bg-center">
            {perfis.map((perfil) => (
              <Image
                key={perfil.key}
                data-active={activeProfile === perfil.key}
                src={perfil.bgImageUrl}
                alt=""
                width={1920}
                height={1280}
                className={twMerge(
                  'absolute top-0 left-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-400',
                  activeProfile === perfil.key && 'scale-100 opacity-100',
                )}
              />
            ))}
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/20 to-black/60" />
          </figure>
        )}
        {perfis.map(({ key, icon: Icon, ...perfil }, index) => (
          <article
            key={key}
            data-active={activeProfile === key}
            className={twMerge(
              'group relative flex grow flex-col justify-end p-6 xl:h-[680px] xl:p-8',
              index + 1 === 1 &&
                'border-b border-white/20 md:border-r xl:border-b-0',
              index + 1 === 2 &&
                'border-r border-b border-white/20 xl:border-b-0',
              index + 1 === 3 &&
                'border-b border-white/20 md:border-r md:border-b-0',
              index + 1 === 4 && '',
            )}
            data-image-background={perfil.bgImageUrl}
            onMouseOver={() => handleProfileHover(key)}
          >
            {!isDesktop && (
              <>
                <Image
                  src={perfil.bgImageUrl}
                  width={1920}
                  height={1280}
                  alt=""
                  className="absolute top-0 left-0 h-full w-full object-cover"
                />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/40 to-black/90" />
              </>
            )}

            <div
              data-active={activeProfile === key}
              className={twMerge(
                'absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/10 to-black/90 opacity-0 transition-all duration-400',
                activeProfile === key ? 'opacity-100' : '',
              )}
            />

            <div
              data-active={activeProfile === key}
              className="relative flex flex-col text-white"
            >
              <figure
                className={twMerge(
                  'mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-white/20 ring ring-white/70 transition duration-200',
                  activeProfile === key &&
                    'bg-primary-600/40 ring-primary-200/70 text-primary-100',
                )}
              >
                <Icon size={24} />
              </figure>
              <h3 className="mb-4 text-2xl font-bold">{perfil.title}</h3>

              {isDesktop ? (
                <AnimatePresence initial={false}>
                  {activeProfile === key && (
                    <motion.div
                      data-slot="description"
                      className="hidden text-sm lg:block"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      <p>{perfil.description}</p>

                      <h5 className="mt-2 font-bold">Características</h5>
                      <p>{perfil.traits.join(', ')}.</p>

                      <h5 className="mt-4 font-bold">
                        Presente nas carreiras de
                      </h5>
                      <p>{perfil.roles.join(', ')}.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              ) : (
                <div data-slot="description" className="text-sm">
                  <p>{perfil.description}</p>

                  <h5 className="mt-2 font-bold">Características</h5>
                  <p>{perfil.traits.join(', ')}.</p>

                  <h5 className="mt-4 font-bold">Presente nas carreiras de</h5>
                  <p>{perfil.roles.join(', ')}.</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      {/* <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <figure className="flex items-center justify-center rounded-2xl">
            <Image
              src="/images/profile-segmentation.svg"
              width={3800}
              height={3800}
              alt=""
              className="w-[80%] object-contain md:w-[60%] lg:w-full"
            />
          </figure>
          <div>
            <header className="flex flex-col items-center gap-4 lg:items-start">
              <PageSection.Label>Benefícios</PageSection.Label>
              <div className="items-center: flex flex-col gap-4 lg:items-start">
                <PageSection.Headline className="max-w-[720px] text-center text-balance lg:text-start">
                  Porque aplicar o Teste DISC na sua empresa?
                </PageSection.Headline>
                <PageSection.Description className="w-full max-w-[720px] text-center text-balance lg:text-start">
                  Aplicando o teste DISC, você pode aumentar o autoconhecimento
                  dos indivíduos e melhorar o desempenho das equipes em
                  empresas, pois ele ajuda a identificar perfis comportamentais
                  para alinhar talentos às funções, otimizar o recrutamento e a
                  seleção, e desenvolver programas de desenvolvimento individual
                  e de equipe.
                </PageSection.Description>
              </div>
            </header>
            <div>
              <ul className="mt-8 flex flex-col gap-4">
                {beneficios.map(({ icon: Icon, title, description }, i) => (
                  <li key={i} className="flex gap-4">
                    <figure className="bg-primary-500/10 ring-primary-500 flex h-8 w-8 items-center justify-center rounded-full ring-2">
                      <Icon className="text-primary-500 h-4 w-4" />
                    </figure>
                    <div className="flex flex-1 flex-col gap-0">
                      <h3 className="text-lg leading-tight font-bold">
                        {title}
                      </h3>
                      <p className="leading-tight text-balance">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </PageSection.Root>
  );
}
