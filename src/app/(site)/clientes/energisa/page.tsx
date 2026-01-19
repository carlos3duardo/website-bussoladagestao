import type { Metadata } from 'next';

import { HeroSection } from './../components/HeroSection';
import { CaseEnergisa } from './CaseEnergisa';

export const metadata: Metadata = {
  title: 'Cases de sucesso | Energisa',
  description:
    'Conheça as experiências de sucesso que nossos clientes tem construido com a Bússola da Gestão.',
};

export default async function Page() {
  return (
    <main>
      <HeroSection />
      <CaseEnergisa />
    </main>
  );
}
