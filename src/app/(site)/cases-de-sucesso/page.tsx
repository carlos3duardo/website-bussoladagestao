import type { Metadata } from 'next';

import { CaseEnergisa } from './components/CaseEnergisa';
import { CaseEpasa } from './components/CaseEpasa';
import { HeroSection } from './components/HeroSection';

export const metadata: Metadata = {
  title: 'Cases de sucesso',
  description:
    'Conheça as experiências de sucesso que nossos clientes tem construido com a Bússola da Gestão.',
};

export default async function Page() {
  return (
    <main>
      <HeroSection />
      <CaseEpasa />
      <CaseEnergisa />
    </main>
  );
}
