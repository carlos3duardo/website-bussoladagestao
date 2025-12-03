import { redirect } from 'next/navigation';

import { getAvCorpInscricao } from '@/lib/api/getAvCorpInscricao';

import { PageMain } from '../../components';
import { Expirado } from '../../components/Expirado';
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

  const isExpired = inscricao.validade
    ? new Date(inscricao.validade) < new Date()
    : false;

  if (isExpired) {
    return (
      <PageMain>
        <Expirado />
      </PageMain>
    );
  }

  if (inscricao.avaliacoes && inscricao.avaliacoes.length > 0) {
    if (inscricao.avaliacoes[0].conclusao) {
      redirect(
        `/canvas360/${inscricaoId}/avaliacao/${inscricao.avaliacoes[0].id}`,
      );
    }

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
