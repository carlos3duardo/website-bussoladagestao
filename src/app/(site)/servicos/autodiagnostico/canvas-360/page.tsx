import { Metadata } from 'next';

import { BannerCallToAction } from './components/BannerCallToAction';
import { BeneficiosSection } from './components/BeneficiosSection';
import { FaqSection } from './components/FaqSection';
import { HeroSection } from './components/HeroSection';
import { SobreSection } from './components/SobreSection';

export const metadata: Metadata = {
  title: 'Canvas 360°',
  description:
    'Descubra o perfil comportamental dos seus colaboradores, melhore a comunicação interna e tome decisões mais assertivas em gestão de pessoas.',
  applicationName: 'Bússola da Gestão',
  referrer: 'same-origin',
  creator: 'Bússola da Gestão',
  openGraph: {
    type: 'website',
    title: 'Canvas 360° - Bússola da Gestão',
    description: 'Avaliação 360o do seu modelo de negócio.',
    siteName: 'Bússola da Gestão',
    locale: 'pt-BR',
    url: process.env.APP_URL,
    countryName: 'Brazil',
    images: `${process.env.APP_URL}/images/thumbnail-teste-disc.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canvas 360° - Bússola da Gestão',
    description: 'Avaliação 360o do seu modelo de negócio.',
    images: `${process.env.APP_URL}/images/thumbnail-teste-disc.png`,
  },
};

export default async function Page() {
  return (
    <main>
      <HeroSection />
      <SobreSection />
      <BeneficiosSection />
      <BannerCallToAction />
      <FaqSection />
    </main>
  );
}
