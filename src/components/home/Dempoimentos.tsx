'use client';

import { Quote } from 'lucide-react';
import Image from 'next/image';
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

export function Depoimentos() {
  const [depoimentos, setDepoimentos] = useState<DepoimentoProps[]>([]);

  useEffect(() => {
    setDepoimentos(
      [
        {
          id: '4ea6a91e-30fb-4faf-8365-28a4c59cb478',
          testimonial:
            '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere."',
          author: 'John Doe',
          company: 'Company Name',
          avatarUrl: '/images/avatars/avatar-01.jpg',
        },
        {
          id: '52230cf8-ba21-4a8a-b459-9c9be563ae30',
          testimonial:
            '"Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."',
          author: 'John Doe',
          company: 'Company Name',
          avatarUrl: '/images/avatars/avatar-02.jpg',
        },
        {
          id: '97a96a3e-dee2-4bb2-a6b3-938232d97fdf',
          testimonial:
            '"We know a diverse workforce and an inclusive culture matters to our clients. Through philanthropy and employee volunteerism, we support the diverse communities where our employees live."',
          author: 'John Doe',
          company: 'Company Name',
          avatarUrl: '/images/avatars/avatar-03.jpg',
        },
        {
          id: 'b38c3779-487e-48e3-90aa-ecfe2caebdc2',
          testimonial:
            '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere."',
          author: 'John Doe',
          company: 'Company Name',
          avatarUrl: '/images/avatars/avatar-04.jpg',
        },
        {
          id: 'c966c57f-77aa-4be8-8754-d0387a5e4287',
          testimonial:
            '"Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."',
          author: 'John Doe',
          company: 'Company Name',
          avatarUrl: '/images/avatars/avatar-05.jpg',
        },
        {
          id: 'b81a19a1-6641-4cbd-9165-072eb7fd2fe4',
          testimonial:
            '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere."',
          author: 'John Doe',
          company: 'Company Name',
          avatarUrl: '/images/avatars/avatar-06.jpg',
        },
      ].toSorted(() => Math.random() - 0.5),
    );
  }, []);

  return (
    <HomeSection.Root>
      <div className="relative container mx-auto flex flex-col gap-20">
        <header className="flex flex-col items-center gap-4">
          <HomeSection.Label>Depoimentos</HomeSection.Label>
          <div className="flex flex-col items-center gap-4">
            <HomeSection.Headline>
              O que as pessoas falam de nós
            </HomeSection.Headline>
            <HomeSection.Description className="w-full max-w-[600px] text-center">
              Nosso trabalho faz a diferença na vida das pessoas e na jornada de
              suas empresas. Junte-se a nós para superar os desafios e alcancar
              o sucesso.
            </HomeSection.Description>
          </div>
        </header>
        <div className="mx-auto w-[480px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
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
                spaceBetween: 32,
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
                <div className="flex h-full flex-col rounded-md bg-white">
                  <p className="flex-1 border-b border-b-slate-200 p-6">
                    {depoimento.testimonial}
                  </p>
                  <footer className="flex flex-row items-center gap-4 p-6">
                    <figure className="relative">
                      <Image
                        src={depoimento.avatarUrl}
                        width={64}
                        height={64}
                        alt=""
                        className="h-16 w-16 rounded-full"
                      />
                      <span className="bg-primary-500 absolute top-[-0.5rem] right-[-0.5rem] flex h-7 w-7 items-center justify-center rounded-full text-white">
                        <Quote size={16} />
                      </span>
                    </figure>
                    <div>
                      <strong className="text-lg font-semibold">
                        {depoimento.author}
                      </strong>
                      <br />
                      <span className="text-primary-500">
                        {depoimento.company}
                      </span>
                    </div>
                  </footer>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </HomeSection.Root>
  );
}
