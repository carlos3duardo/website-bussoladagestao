import { getTesteDisc } from '@/lib/api/getTesteDisc';
import { LoginForm } from './../../../components';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const testeDisc = await getTesteDisc({ id: params.id });

  return (
    <>
      <main className="flex items-center justify-center">
        <LoginForm teste={testeDisc} />
      </main>
    </>
  );
}
