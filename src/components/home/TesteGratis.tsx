'use client';

import { Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { HomeSection } from '@/components/ui';

import bannerDiagnostico from './assets/images/bg-teste-gratis-meg21.jpg';
import bannerTestePerfil from './assets/images/bg-teste-gratis-perfil.jpg';

const testes = [
  {
    id: 1,
    title: 'Descubra a saúde da sua empresa',
    description:
      'Com base no Modelo de Excelência da Gestão (MEG21), identifique forças e pontos de melhoria no seu negócio. Ao final, receba um relatório inteligente com insights práticos para elevar sua performance.',
    beneficios: [
      'Avaliação precisa e confiável',
      'Relatório personalizado com recomendações',
      'Mais clareza para decisões estratégicas',
    ],
    cta: 'Quero avaliar minha empresa',
    image: bannerDiagnostico,
    url: '/autodiagnostico',
  },
  {
    id: 2,
    title: 'Entenda o perfil do seu time',
    description:
      'Aplique gratuitamente uma avaliação de perfil comportamental e descubra como sua equipe se relaciona, trabalha e pode se desenvolver. Resultados que ajudam a alinhar talentos e melhorar a performance.',
    beneficios: [
      'Identifique pontos fortes e oportunidades de desenvolvimento',
      'Melhore comunicação e colaboração',
      'Aumente engajamento conectando talentos à função ideal',
    ],
    cta: 'Quero avaliar minha equipe',
    image: bannerTestePerfil,
    url: '/servicos/teste-perfil',
  },
] as const;

export function TesteGratis() {
  return (
    <HomeSection.Root>
      <div className="relative container mx-auto flex flex-col gap-20 px-4">
        <header className="flex flex-col items-center gap-4">
          <HomeSection.Label>Teste grátis</HomeSection.Label>
          <div className="flex flex-col items-center gap-4">
            <HomeSection.Headline className="max-w-[720px] text-center text-balance">
              Começe agora a superar desafios e alcance o sucesso
            </HomeSection.Headline>
            <HomeSection.Description className="w-full max-w-[600px] text-center text-balance">
              Faça um autodiagnóstico gratuito e descubra o seu potencial de
              crescimento de sua empresa.
            </HomeSection.Description>
          </div>
        </header>

        <ul className="flex flex-col justify-center gap-6 lg:flex-row lg:gap-16">
          {testes.map((teste) => (
            <li key={teste.id} className="">
              <div className="aspect-vertical-banner relative flex flex-col justify-end overflow-hidden rounded-lg 2xl:w-[480px]">
                <Image
                  src={teste.image}
                  alt=""
                  width={1280}
                  height={1920}
                  className="absolute top-0 left-0 h-full w-full object-cover"
                />
                <div className="from-darken to-darken/20 absolute top-0 left-0 h-full w-full bg-linear-to-t" />
                <div className="relative p-6 text-white">
                  <h4 className="text-3xl font-bold text-balance">
                    {teste.title}
                  </h4>
                  <p>{teste.description}</p>
                  <ul className="my-3 flex flex-col gap-1">
                    {teste.beneficios.map((beneficio) => (
                      <li key={beneficio} className="flex items-start gap-2">
                        <Lightbulb
                          size={18}
                          className="text-primary-500 mt-1"
                        />
                        <span>{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={teste.url}
                    className="border-primary-500 bg-primary-500/20 hover:bg-primary-500 mt-4 flex w-full items-center justify-center rounded-md border py-3 text-center font-semibold text-white"
                  >
                    {teste.cta}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </HomeSection.Root>
  );
}
