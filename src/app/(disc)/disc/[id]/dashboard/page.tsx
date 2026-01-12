import { Metadata } from 'next';

import { getTesteDiscInscricao } from '@/lib/api';
import { firstName } from '@/lib/helpers';

import { DashboardHeader } from './components/DashboardHeader';
import { Error } from './components/Error';
import { UsuarioTabela } from './components/UsuarioTabela';
import { Expirado } from './components/Expirado';

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

  const isExpired = testeDisc.validade
    ? new Date(testeDisc.validade) < new Date()
    : false;

  return (
    <main className="mx-auto w-full max-w-7xl">
      {isExpired ? (
        <Expirado />
      ) : (
        <>
          <h1 className="text-xl font-semibold">
            Olá, {firstName({ fullName: testeDisc.usuario, ucfirst: true })}.
          </h1>
          <pre>{JSON.stringify(testeDisc, null, 2)}</pre>

          <DashboardHeader inscricaoId={id} />

          <br />

          <UsuarioTabela inscricaoId={id} />
        </>
      )}
    </main>
  );
}
