import Image from 'next/image';
import Link from 'next/link';

import { PageMain } from '@/app/(canvas360)/components';
import { Resultado } from '@/app/(canvas360)/components/Resultado';
import { getAvCorpAvaliacao } from '@/lib/api/getAvCorpAvaliacao';

interface PageProps {
  params: Promise<{
    inscricaoId: string;
    avaliacaoId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { avaliacaoId } = await params;

  const avaliacao = await getAvCorpAvaliacao({ avaliacaoId });

  if (!avaliacao) {
    return (
      <PageMain className="bg-[url(/images/bg-icon-pattern-01.png)]">
        <div className="mx-auto flex w-3/4 max-w-[420px] flex-col gap-4 rounded-lg bg-white p-8 shadow-md">
          <figure className="w-full">
            <Image
              src="/images/404.svg"
              alt=""
              width={667}
              height={667}
              className="w-full"
            />
          </figure>
          <h1 className="text-center text-lg font-semibold">
            Avaliação não encontrada
          </h1>
          <p className="text-center text-sm">
            Não encontramos a avaliação que você procura.
            <br />
            Seu link é inválido ou expirou.
          </p>
          <p className="text-center text-sm">
            <Link href="/">Voltar para o início</Link>
          </p>
        </div>
      </PageMain>
    );
  }

  return (
    <PageMain className="bg-[url(/images/bg-icon-pattern-01.png)]">
      <Resultado avaliacaoId={avaliacaoId} />
    </PageMain>
  );
}
