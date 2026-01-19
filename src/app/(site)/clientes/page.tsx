import type { Metadata } from 'next';

import { CasesEspeciais } from './components/CasesEspeciais';
import { Clientes } from './components/Clientes';
import { Depoimentos } from './components/Depoimentos';
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
      <Clientes />
      <CasesEspeciais />
      <Depoimentos />
    </main>
  );
}
