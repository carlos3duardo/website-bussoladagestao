import type { Metadata } from 'next';

import { TesteDiscBeneficiosSection } from './components/TesteDiscBeneficiosSection';
import { TesteDiscCallToActionSection } from './components/TesteDiscCallToActionSection';
import { TesteDiscDescricao } from './components/TesteDiscDescricao';
import { TesteDiscFaqSection } from './components/TesteDiscFaqSection';
import { TesteDiscHero } from './components/TesteDiscHero';

export const metadata: Metadata = {
  title: 'Teste DISC',
  description:
    'Descubra o perfil comportamental dos seus colaboradores, melhore a comunicação interna e tome decisões mais assertivas em gestão de pessoas.',
  applicationName: 'Bússola da Gestão',
  referrer: 'same-origin',
  creator: 'Bússola da Gestão',
  openGraph: {
    type: 'website',
    title: 'Teste DISC - Bússola da Gestão',
    description: 'Potencialize sua equipe com o teste de personalidade DISC.',
    siteName: 'Bússola da Gestão',
    locale: 'pt-BR',
    url: process.env.APP_URL,
    countryName: 'Brazil',
    images: `${process.env.APP_URL}/images/thumbnail-teste-disc.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teste DISC - Bússola da Gestão',
    description: 'Potencialize sua equipe com o teste de personalidade DISC.',
    images: `${process.env.APP_URL}/images/thumbnail-teste-disc.png`,
  },
};

export default async function Page() {
  return (
    <main>
      <TesteDiscHero />
      <TesteDiscDescricao />
      <TesteDiscBeneficiosSection />
      <TesteDiscCallToActionSection />
      <TesteDiscFaqSection />
    </main>
  );
}
