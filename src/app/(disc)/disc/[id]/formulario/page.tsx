import { getTesteDiscInscricao } from '@/lib/api';

import { Error } from '../dashboard/components/Error';
import { Expirado } from '../dashboard/components/Expirado';
import { Intro } from './components/Intro';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const inscricao = await getTesteDiscInscricao({ id });

  if (!inscricao) {
    return <Error />;
  }

  const isExpired = inscricao.validade
    ? new Date(inscricao.validade) < new Date()
    : false;

  return (
    <main className="mx-auto w-full max-w-7xl">
      {isExpired ? (
        <Expirado
          title="O link do seu teste DISC expirou"
          description="Se você recebeu este link de outra pessoa, você precisa solicitar um link atualizado."
        />
      ) : (
        <Intro inscricao={inscricao} />
      )}
    </main>
  );
}
