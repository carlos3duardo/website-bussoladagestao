import type { Metadata } from 'next';

import { EtapasSection } from './components/EtapasSection';
import { FaqSection } from './components/FaqSection';
import { HeroSection } from './components/HeroSection';
import { HistoriaSection } from './components/HistoriaSection';
import { ProcessosSection } from './components/ProcessosSection';
import { SobreSection } from './components/SobreSection';

export const metadata: Metadata = {
  title: 'RH Advanced',
  description: '',
};

export default async function Page() {
  return (
    <main>
      <HeroSection />
      <SobreSection />
      <HistoriaSection />
      <EtapasSection />
      <ProcessosSection />
      <FaqSection />
    </main>
  );
}
