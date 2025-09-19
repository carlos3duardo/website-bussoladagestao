import { getTesteDiscInscricao } from '@/lib/api';
import { LoginForm } from './../../components';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const testeDisc = await getTesteDiscInscricao({ id });

  return (
    <>
      <main className="flex items-center justify-center">
        <LoginForm teste={testeDisc} />
      </main>
    </>
  );
}
