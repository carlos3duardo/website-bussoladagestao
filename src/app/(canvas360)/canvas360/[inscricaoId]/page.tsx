import { redirect } from 'next/navigation';

import { getAvCorpInscricao } from '@/lib/api/getAvCorpInscricao';

import { PageMain } from '../../components';
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
    redirect(
      `/canvas360/${inscricaoId}/avaliacao/${inscricao.avaliacoes[0].id}/questionario`,
    );
  }

  return (
    <PageMain>
      <Welcome inscricao={inscricao} />
    </PageMain>
  );
}
