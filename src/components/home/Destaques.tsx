'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const destaques = [
  {
    id: '1d908d3d-e84c-4c4d-bacf-6883cad3b29a',
    title: 'Leve a sua equipe para o próximo nível',
    subtitle:
      'Promova uma cultura de desenvolvimento e performance através da gestão de pessoas.',
    subject: 'Pessoas',
    description: 'O capital mais importante na sua empresa',
    primaryActionText: 'Saiba mais',
    primaryActionLink: '/',
    secondaryActionText: 'Entre em contato',
    secondaryActionLink: '/',
    backgroundImageUrl: '/images/bg-destaque-equipe-discutindo.jpg',
  },
  {
    id: 'c9109dec-16b8-41f5-b383-1725355a6d6c',
    title: 'Descubra o potencial da sua empresa',
    subtitle:
      'Realize diagnósticos completos, identifique pontos fortes e oportunidades de melhoria e direcione ações estratégicas para resultados reais.',
    subject: 'Avaliação',
    description: 'O primeiro passo para a excelência',
    primaryActionText: 'Saiba mais',
    primaryActionLink: '/',
    secondaryActionText: 'Entre em contato',
    secondaryActionLink: '/',
    backgroundImageUrl: '/images/bg-destaque-executivo-com-laptop.jpg',
  },
  {
    id: 'ab8028bb-1fae-49ca-b09b-ab6c1750c062',
    title: 'Capacite sua equipe, impulsione resultados',
    subtitle:
      'Ofereça treinamentos online, acompanhe o desempenho dos colaboradores e promova uma cultura de aprendizado contínuo. Invista no crescimento do seu time.',
    subject: 'Conhecimento',
    description: 'Aprendizado sem fronteiras',
    primaryActionText: 'Saiba mais',
    primaryActionLink: '/',
    secondaryActionText: 'Entre em contato',
    secondaryActionLink: '/',
    backgroundImageUrl: '/images/bg-destaque-mulher-com-laptop.jpg',
  },
] as const;

export function Destaques() {
  return (
    <div className="h-[calc(100dvh-90px)] w-full items-center justify-center overflow-hidden lg:h-[calc(100dvh-120px)]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="h-[calc(100dvh-120px)] w-screen"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        onTransitionEnd={(swiper) => console.log('transition end', swiper)}
      >
        {destaques.map((destaque) => (
          <SwiperSlide key={destaque.id}>
            <section className="relative flex h-full w-full items-center justify-center bg-slate-400">
              <figure className="absolute top-0 left-0 h-full w-full">
                <Image
                  src={destaque.backgroundImageUrl}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50" />
              </figure>
              <div className="relative container mx-auto flex flex-col items-start gap-4">
                <h3 className="flex items-center gap-2 rounded-full py-0.5 pr-3 pl-0.5 text-[11px] leading-0 font-bold text-white uppercase ring ring-white/50">
                  <span className="text-primary-500 flex h-[22px] items-center rounded-full bg-white px-3">
                    {destaque.subject}
                  </span>
                  {destaque.description}
                </h3>

                <h2 className="w-full text-6xl font-bold tracking-tight text-white lg:w-1/2">
                  {destaque.title}
                </h2>

                <p className="text-lg font-medium text-white lg:w-1/3">
                  {destaque.subtitle}
                </p>

                <div className="flex items-center gap-10">
                  <Link
                    href="/"
                    className="bg-primary-500 hover:bg-darken rounded px-9 py-4.5 text-sm font-semibold text-white uppercase"
                  >
                    {destaque.primaryActionText}
                  </Link>

                  <Link
                    href="/"
                    className="hover:bg-primary-500 hover:ring-primary-500 rounded bg-white/10 px-9 py-4.5 text-sm font-semibold text-white uppercase ring ring-white/30"
                  >
                    {destaque.secondaryActionText}
                  </Link>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
