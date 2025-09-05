import { TesteDiscBeneficiosSection } from './components/TesteDiscBeneficiosSection';
import { TesteDiscCallToActionSection } from './components/TesteDiscCallToActionSection';
import { TesteDiscDescricao } from './components/TesteDiscDescricao';
import { TesteDiscFaqSection } from './components/TesteDiscFaqSection';
import { TesteDiscHero } from './components/TesteDiscHero';

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
