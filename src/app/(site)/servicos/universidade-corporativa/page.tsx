import type { Metadata } from 'next';

import { BeneficiosSection } from './components/BeneficiosSection';
import { FaqSection } from './components/FaqSection';
import { HeroSection } from './components/HeroSection';
import { RecursosSection } from './components/RecursosSection';

export const metadata: Metadata = {
  title: 'Universidade Corporativa',
  description: '',
};

export default async function Page() {
  return (
    <main>
      <HeroSection />
      <BeneficiosSection />
      <RecursosSection />
      <FaqSection />
    </main>
  );
}
