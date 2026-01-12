import type { Metadata } from 'next';

import { HeroSection } from './components/HeroSection';
import { ModuloDesenvolvimentoHumanoOrganizacional } from './components/ModuloDesenvolvimentoHumanoOrganizacional';
import { ModuloDiagnosticoEmpresarial } from './components/ModuloDiagnosticoEmpresarial';
import { ModuloPesquisaSatisfacao } from './components/ModuloPesquisaSatisfacao';
import { ModuloUniversidadeCorporativa } from './components/ModuloUniversidadeCorporativa';

export const metadata: Metadata = {
  title: 'Produtos',
  description:
    'Descubra o perfil comportamental dos seus colaboradores, melhore a comunicação interna e tome decisões mais assertivas em gestão de pessoas.',
  applicationName: 'Bússola da Gestão',
  referrer: 'same-origin',
  creator: 'Bússola da Gestão',
  openGraph: {
    type: 'website',
    title: 'Produtos - Bússola da Gestão',
    description: 'Potencialize sua equipe com o teste de personalidade DISC.',
    siteName: 'Bússola da Gestão',
    locale: 'pt-BR',
    url: process.env.APP_URL,
    countryName: 'Brazil',
    images: `${process.env.APP_URL}/images/thumbnail-teste-disc.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Produtos - Bússola da Gestão',
    description: 'Potencialize sua equipe com o teste de personalidade DISC.',
    images: `${process.env.APP_URL}/images/thumbnail-teste-disc.png`,
  },
};

export default async function Page() {
  return (
    <main>
      <HeroSection />
      <ModuloDiagnosticoEmpresarial />
      <ModuloDesenvolvimentoHumanoOrganizacional />
      <ModuloUniversidadeCorporativa />
      <ModuloPesquisaSatisfacao />
    </main>
  );
}
