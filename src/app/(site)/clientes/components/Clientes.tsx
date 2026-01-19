/* eslint-disable indent */
'use client';

import 'swiper/css';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { PageSection } from '@/components/ui';

type ClienteProps = {
  id: string;
  name: string;
  link: string;
  image: string;
};

const clientesList = [
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
  {
    id: '45099677-6121-4a2b-b1b9-02899572a66b',
    name: 'Rommanel',
    link: 'https://www.rommanel.com.br',
    image: '/images/clientes/rommanel.png',
  },
  {
    id: 'ef951093-6b37-4495-b90a-f56078c24eab',
    name: 'CasaTudo',
    link: 'https://casatudo.com.br',
    image: '/images/clientes/casatudo.png',
  },
] as ClienteProps[];

export function Clientes() {
  const [clientes, setClientes] = useState<ClienteProps[]>([]);

  useEffect(() => {
    setClientes(clientesList.toSorted(() => Math.random() - 0.5));
  }, []);

  return (
    <PageSection.Root>
      <header className="flex flex-col items-center gap-4">
        <PageSection.Label>Onde ja atuamos</PageSection.Label>
        <div className="flex flex-col items-center gap-4">
          <PageSection.Headline className="text-center">
            Parcerias realizadas
          </PageSection.Headline>
          <PageSection.Description className="w-full max-w-[600px] text-center">
            Alguns de nossos principais clientes que nos ajudaram a crescer
          </PageSection.Description>
        </div>
      </header>
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 xl:px-8">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {clientes.length > 0
            ? clientes.map((cliente, key) => (
                <li key={key}>
                  <figure className="flex h-[160px] items-center justify-center">
                    <Image
                      src={cliente.image}
                      width={180}
                      height={80}
                      alt=""
                      className="h-[60px] w-[135px] object-scale-down opacity-40 brightness-0 transition duration-300 ease-in-out hover:opacity-100 hover:brightness-100 lg:h-[80px] lg:w-[180px]"
                    />
                  </figure>
                </li>
              ))
            : Array.from({ length: clientesList.length }).map((_, key) => (
                <li key={key}>
                  <figure className="flex h-[160px] items-center justify-center">
                    <Image
                      src="/images/picture.svg"
                      width={256}
                      height={256}
                      alt=""
                      className="h-[60px] w-[60px] object-scale-down opacity-40 lg:h-[80px] lg:w-[80px]"
                    />
                  </figure>
                </li>
              ))}
        </ul>
      </div>
    </PageSection.Root>
  );
}
