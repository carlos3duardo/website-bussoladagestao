import type { Metadata } from 'next';

import { HeroSection } from './../components/HeroSection';
import { CaseEpasa } from './CaseEpasa';

export const metadata: Metadata = {
  title: 'Cases de sucesso | Epasa',
  description:
    'Conheça as experiências de sucesso que nossos clientes tem construido com a Bússola da Gestão.',
};

export default async function Page() {
  return (
    <main>
      <HeroSection />
      <CaseEpasa />
    </main>
  );
}
