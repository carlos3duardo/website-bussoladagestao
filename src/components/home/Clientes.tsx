'use client';

import 'swiper/css';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HomeSection } from '@/components/ui';

type ClienteProps = {
  id: string;
  name: string;
  link: string;
  image: string;
};

export function Clientes() {
  const [clientes, setClientes] = useState<ClienteProps[]>([]);

  useEffect(() => {
    setClientes(
      [
        {
          id: 'c7746195-ae2a-45ea-990d-bc44dc9d4a96',
          name: 'Dental Gold',
          link: 'https://dentalgold.com.br',
          image: '/images/clientes/dentalgold.png',
        },
        {
          id: 'a3d11d4e-bffb-49f4-8444-26c0ccf12ab0',
          name: 'EPASA - Centrais Elétricas da Paraíba S.A.',
          link: 'https://www.epasa.online',
          image: '/images/clientes/epasa.png',
        },
        {
          id: '635d78ab-eaad-4363-9cb5-0212d1a75797',
          name: 'Energisa',
          link: 'https://www.energisa.com.br',
          image: '/images/clientes/energisa.png',
        },
        {
          id: 'e3d7a1e6-0cc1-4ee0-a729-6a02081775a2',
          name: 'Officina Móveis',
          link: 'https://officinamoveis.com',
          image: '/images/clientes/officina.png',
        },
        {
          id: 'e2418d6c-2a70-4890-be6e-0f22fef8fdbc',
          name: 'Uniesp',
          link: 'https://www.iesp.edu.br',
          image: '/images/clientes/uniesp.png',
        },
        {
          id: '5760c3cd-8550-492c-adc9-b24972cff1ec',
          name: 'Clube Kids',
          link: 'https://clubkidsoficial.com.br',
          image: '/images/clientes/clubkids.png',
        },
        {
          id: 'da4398ae-867f-4b39-b571-2e7c37b1a2af',
          name: 'Grupo BRF1',
          link: 'https://grupobrf1.com',
          image: '/images/clientes/grupo-brf1.png',
        },
        {
          id: '0004e3d0-0f29-43cd-913f-0a53d4fdc3e3',
          name: 'Água Rabelo',
          link: 'https://aguarabelo.com.br',
          image: '/images/clientes/agua-rabelo.png',
        },
        {
          id: 'ce719c1f-1771-4fed-8890-9a6e778007f9',
          name: 'TECCEL Engenharia',
          link: 'https://www.instagram.com/teccelengenharia/',
          image: '/images/clientes/teccel.png',
        },
      ].toSorted(() => Math.random() - 0.5),
    );
  }, []);

  return (
    <HomeSection.Root className="bg-slate-200 py-12 lg:py-24">
      <div className="relative mx-auto w-[380px] md:w-[680px] lg:w-[960px] xl:w-[1020px] 2xl:w-[1366px]">
        <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-slate-200 to-transparent" />
        <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-slate-200 to-transparent" />
        <Swiper
          freeMode={true}
          slidesPerView={2}
          spaceBetween={0}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          loop
          speed={4000}
          breakpoints={{
            '960': {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 32,
            },
            '1280': {
              slidesPerView: 5,
              spaceBetween: 32,
            },
          }}
          modules={[Autoplay]}
        >
          {clientes.concat(clientes).map((cliente, key) => (
            <SwiperSlide key={key}>
              <figure className="flex h-[160px] items-center justify-center">
                <Image
                  src={cliente.image}
                  width={180}
                  height={80}
                  alt=""
                  className="h-[60px] w-[135px] object-scale-down opacity-40 brightness-0 transition duration-300 ease-in-out hover:opacity-100 hover:brightness-100 lg:h-[80px] lg:w-[180px]"
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </HomeSection.Root>
  );
}
