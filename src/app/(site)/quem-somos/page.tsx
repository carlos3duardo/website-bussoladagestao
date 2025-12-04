import type { Metadata } from 'next';

import { Apresentacao } from './components/Apresentacao';
import { HeroSection } from './components/HeroSection';

export const metadata: Metadata = {
  title: 'Quem somos',
  description:
    'Descubra o perfil comportamental dos seus colaboradores, melhore a comunicação interna e tome decisões mais assertivas em gestão de pessoas.',
  applicationName: 'Bússola da Gestão',
  referrer: 'same-origin',
  creator: 'Bússola da Gestão',
  openGraph: {
    type: 'website',
    title: 'Quem somos - Bússola da Gestão',
    description: 'Potencialize sua equipe com o teste de personalidade DISC.',
    siteName: 'Bússola da Gestão',
    locale: 'pt-BR',
    url: process.env.APP_URL,
    countryName: 'Brazil',
    images: `${process.env.APP_URL}/images/thumbnail-teste-disc.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quem somos - Bússola da Gestão',
    description: 'Potencialize sua equipe com o teste de personalidade DISC.',
    images: `${process.env.APP_URL}/images/thumbnail-teste-disc.png`,
  },
};

export default async function Page() {
  return (
    <main>
      <HeroSection />
      <Apresentacao />
    </main>
  );
}
