import { getAvCorpInscricao } from '@/lib/api/getAvCorpInscricao';

import { Welcome } from '../../components/Welcome';

interface PageProps {
  params: Promise<{
    inscricaoId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { inscricaoId } = await params;

  const inscricao = await getAvCorpInscricao({
    id: inscricaoId,
    relationships: ['avaliacoes'],
  });

  if (inscricao.avaliacoes && inscricao.avaliacoes.length > 0) {
    return (
      <main>
        <p>Voce ja fez a avaliacao.</p>
      </main>
    );
  }

  return (
    <main>
      <div className="mx-auto w-full max-w-7xl px-4 2xl:px-6">
        <Welcome inscricao={inscricao} />
      </div>
    </main>
  );
}
