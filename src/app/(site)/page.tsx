import {
  AreaDeAtuacao,
  Clientes,
  Contato,
  Depoimentos,
  Ferramentas,
  Metricas,
  NossosServicos,
  TesteGratis,
} from '@/components/home';
import { Destaques } from '@/components/home/Destaques';
import { QuemSomos } from '@/components/home/QuemSomos';

export default function Home() {
  return (
    <>
      <Destaques />
      <main>
        <QuemSomos />
        <NossosServicos />
        <AreaDeAtuacao />
        <Clientes />
        <Ferramentas />
        <Depoimentos />
        <Metricas />
        <TesteGratis />
        <Contato />
      </main>
    </>
  );
}
