import {
  AreaDeAtuacao,
  Clientes,
  Depoimentos,
  Ferramentas,
  NossosServicos,
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
      </main>
    </>
  );
}
