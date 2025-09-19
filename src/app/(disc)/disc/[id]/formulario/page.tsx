import { getTesteDiscInscricao } from '@/lib/api';

import { Intro } from './components/Intro';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const inscricao = await getTesteDiscInscricao({ id });

  return (
    <main className="mx-auto w-full max-w-7xl">
      <Intro inscricao={inscricao} />
    </main>
  );
}
