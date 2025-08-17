'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { HomeSection } from '@/components/ui';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import banner from './assets/images/banner-quem-somos.jpg';
import bussolaMoldura from './assets/images/bussola-moldura-v1.svg';
import bussolaPonteiro from './assets/images/bussola-ponteiro.svg';

export function QuemSomos() {
  const ponteirosRef = useRef<HTMLDivElement>(null);
  const setaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(ponteirosRef.current, {
      rotation: 360, // ou quantas voltas você quiser
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // sincroniza com o scroll
      },
    });

    gsap.to(setaRef.current, {
      rotation: 180, // ou quantas voltas você quiser
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // sincroniza com o scroll
      },
    });
  }, []);

  return (
    <HomeSection.Root className="bg-darken overflow-hidden">
      <div
        data-slot="bussola-moldura"
        className="absolute top-0 right-0 w-3/4 translate-x-1/4 -translate-y-1/4 lg:top-[50%] lg:left-0 lg:w-1/2 lg:-translate-y-1/2"
        ref={ponteirosRef}
      >
        <figure className="opacity-5">
          <Image
            src={bussolaMoldura}
            alt=""
            width={500}
            height={500}
            className="h-[100%] w-[100%] brightness-0 invert-100"
          />
        </figure>
      </div>
      <div
        data-slot="bussola"
        className="absolute top-0 right-0 w-3/4 translate-x-1/4 -translate-y-1/4 -rotate-50 lg:top-[50%] lg:left-0 lg:w-1/2 lg:-translate-y-1/2"
        ref={setaRef}
      >
        <figure>
          <Image
            src={bussolaPonteiro}
            alt=""
            width={500}
            height={500}
            className="h-[100%] w-[100%]"
          />
        </figure>
      </div>
      <div className="relative container mx-auto flex flex-row-reverse items-center py-[5rem] text-white">
        <div data-slot="content" className="relative p-8 lg:w-1/2">
          <header className="flex flex-col items-start gap-4">
            <HomeSection.Label variant="outline">Sobre nós</HomeSection.Label>
            <HomeSection.Headline>
              Provemos soluções para que sua empresa prospere
            </HomeSection.Headline>
          </header>

          <div className="mt-6 flex flex-col gap-6">
            <p>
              A Bússola da Gestão é uma empresa de educação corporativa
              comprometida em transformar a gestão empresarial por meio da
              integração entre tecnologia, educação e estratégia. Nosso
              propósito é potencializar resultados e promover mudanças
              significativas nas organizações, sustentados por três pilares
              fundamentais: cultura, resultados e inovação.
            </p>
            <figure className="relative overflow-hidden rounded-md">
              <div className="bg-darken/20 absolute top-0 left-0 h-full w-full" />
              <Image
                src={banner}
                width={1920}
                height={1280}
                alt=""
                className="h-[240px] w-[100%] object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </HomeSection.Root>
  );
}
