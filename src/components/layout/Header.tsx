'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const menu = [
  {
    title: 'Quem somos',
    href: '#',
  },
  {
    title: 'Produtos',
    href: '#',
  },
  {
    title: 'Clientes',
    href: '#',
  },
  {
    title: 'Cases',
    href: '#',
  },
  {
    title: 'Contato',
    href: '#',
  },
] as const;

const socialnetworks = [
  {
    title: 'Istagram',
    href: '#',
    iconUrl: '/images/brands/instagram.svg',
  },
  {
    title: 'LinkedIn',
    href: '#',
    iconUrl: '/images/brands/linkedin.svg',
  },
  {
    title: 'Youtube',
    href: '#',
    iconUrl: '/images/brands/youtube.svg',
  },
];

export function Header() {
  const logoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: '-10px' },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
      },
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: '-10px' },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
      },
    );
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        '.nav-item',
        { opacity: 0, y: '-10px' },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.4,
          stagger: {
            each: 0.1,
          },
        },
      );
    },
    { scope: navContainerRef },
  );

  return (
    <header>
      <div className="bg-darken flex h-[90px] items-center">
        <div className="container mx-auto flex items-center justify-between px-6">
          <figure className="opacity-0" ref={logoRef}>
            <Image
              src="/images/logotipo-darkmode.png"
              width={1750}
              height={647}
              alt="Bussola da Gestão"
              className="h-[60px] w-[162px]"
            />
          </figure>
          <div className="opacity-0" ref={ctaRef}>
            <Link
              href="/"
              className="ring-primary-500/40 bg-primary-500/20 hover:bg-primary-500 hover:ring-primary-500 rounded px-4 py-3 text-sm font-bold text-white uppercase ring"
            >
              Agende uma demonstração
            </Link>
          </div>
        </div>
      </div>
      <nav className="bg-darken relative z-10 hidden h-[30px] lg:block">
        <div
          ref={navContainerRef}
          className="container mx-auto flex h-[60px] items-center justify-between rounded-md bg-white px-6 shadow-md"
        >
          <ul className="flex gap-4 font-bold uppercase">
            {menu.map((item) => (
              <li key={item.title} className="nav-item">
                <Link
                  href={item.href}
                  className="hover:text-primary-500 text-sm"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex gap-2 font-bold uppercase">
            {socialnetworks.map((item) => (
              <li key={item.title} className="nav-item">
                <Link
                  href={item.href}
                  className="group hover:bg-primary-500 flex h-9 w-9 items-center justify-center rounded"
                >
                  <Image
                    src={item.iconUrl}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
