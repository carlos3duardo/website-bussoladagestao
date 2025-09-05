import { BeneficiosSection } from './components/BeneficiosSection';
import { FaqSection } from './components/FaqSection';
import { HeroSection } from './components/HeroSection';
import { SobreSection } from './components/SobreSection';

export default async function Page() {
  return (
    <main>
      <HeroSection />
      <SobreSection />
      <BeneficiosSection />
      <FaqSection />
    </main>
  );
}
