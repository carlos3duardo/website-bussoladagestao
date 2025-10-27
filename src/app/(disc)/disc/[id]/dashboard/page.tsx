import { Metadata } from 'next';

import { getTesteDiscInscricao } from '@/lib/api';
import { firstName } from '@/lib/helpers';

import { DashboardHeader } from './components/DashboardHeader';
import { Error } from './components/Error';
import { UsuarioTabela } from './components/UsuarioTabela';

export const metadata: Metadata = {
  title: 'Teste DISC',
  description:
    'Transformando negócios com educação e inovação. Junte-se a nós para alcançar novos patamares de sucesso.',
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    chave: string;
  }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { chave } = await searchParams;

  const testeDisc = await getTesteDiscInscricao({ id });

  if (!testeDisc || testeDisc.chave !== chave) {
    return <Error />;
  }

  return (
    <main className="mx-auto w-full max-w-7xl">
      <h1 className="text-xl font-semibold">
        Olá, {firstName({ fullName: testeDisc.usuario, ucfirst: true })}.
      </h1>

      <DashboardHeader inscricaoId={id} />

      <br />

      <UsuarioTabela inscricaoId={id} />
    </main>
  );
}
