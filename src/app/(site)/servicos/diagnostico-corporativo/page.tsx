import type { Metadata } from 'next';

import { BeneficiosSection } from './components/BeneficiosSection';
import { FaqSection } from './components/FaqSection';
import { HeroSection } from './components/HeroSection';
import { HistoriaSection } from './components/HistoriaSection';
import { SobreSection } from './components/SobreSection';

export const metadata: Metadata = {
  title: 'Avaliação da Maturidade da Gestão',
  description: '',
};

export default async function Page() {
  return (
    <main>
      <HeroSection />
      <SobreSection />
      <HistoriaSection />
      <BeneficiosSection />
      <FaqSection />
    </main>
  );
}
