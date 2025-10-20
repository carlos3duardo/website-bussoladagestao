import { PageMain } from '@/app/(canvas360)/components';
import { Questionario } from '@/app/(canvas360)/components/Questionario';
import { getAvCorpQuestionario } from '@/lib/api';

interface PageProps {
  params: Promise<{
    inscricaoId: string;
    avaliacaoId: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { inscricaoId, avaliacaoId } = await params;
  const { action = '' } = await searchParams;

  const avaliacao = await getAvCorpQuestionario({ avaliacaoId });

  return (
    <PageMain>
      <Questionario
        avaliacao={avaliacao}
        inscricaoId={inscricaoId}
        exibirApenasQuestoesSemResposta={action === 'revisao'}
      />
    </PageMain>
  );
}
