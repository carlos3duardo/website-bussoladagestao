import Image from 'next/image';

import Home from '@/app/page';
import { HomeSection } from '@/components/ui';

import backgroundImage from './assets/images/bg-metricas.jpg';

const metricas = [
  {
    label: 'Clientes<br />satisfeitos',
    value: 317,
  },
  {
    label: 'Projetos<br />realizados',
    value: 448,
  },
  {
    label: 'Anos de<br />experiencia',
    value: 12,
  },
  {
    label: 'Diagnósticos<br />realizados',
    value: 412,
  },
] as const;

export function Metricas() {
  return (
    <HomeSection.Root className="bg-black text-white">
      <figure className="absolute top-0 right-0 bottom-0 left-0">
        <Image
          src={backgroundImage}
          width={1920}
          height={492}
          alt=""
          className="h-full object-cover"
        />
      </figure>
      <div className="bg-darken absolute top-0 left-0 h-full w-full opacity-40" />
      <div className="relative container mx-auto flex flex-col gap-16">
        <header className="flex w-full flex-col items-start gap-4 lg:w-1/2">
          <HomeSection.Label>Nossos números</HomeSection.Label>
          <div className="flex flex-col items-start gap-4">
            <HomeSection.Headline className="w-full">
              Experiência que se
              <br />
              transforma em números
            </HomeSection.Headline>
            <HomeSection.Description>
              Ao longo dos anos, acumulamos um vasto conhecimento e experiência
              prática, traduzidos em números que refletem nossa dedicação e
              capacidade de resolver desafios reais. Cada projeto, cada hora
              investida e cada cliente atendido representa não apenas
              resultados, mas também evolução contínua em nossa forma de
              entregar valor.
            </HomeSection.Description>
          </div>
        </header>
        <div className="h-[1px] w-full bg-white/50" />
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metricas.map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-0 md:flex-row md:gap-4"
            >
              <span className="text-5xl font-bold">{value}</span>
              <span
                className="text-center text-base leading-tight font-medium md:text-left"
                dangerouslySetInnerHTML={{ __html: label }}
              />
            </div>
          ))}
        </div>
      </div>
    </HomeSection.Root>
  );
}
