import type { Metadata } from 'next';

import { Card } from '@/components/ui';
import { getTesteDiscQuestionario } from '@/lib/api';
import { getTesteDiscUsuario } from '@/lib/api/getTesteDiscUsuario';
import { capitalize, firstName } from '@/lib/helpers';

import { Questionario } from './components/Questionatio';
import { ResultadoUsuario } from './components/ResultadoUsuario';

interface PageProps {
  params: Promise<{
    id: string;
    usuarioId: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id: inscricaoId, usuarioId } = await params;

  const usuario = await getTesteDiscUsuario({ inscricaoId, usuarioId });

  return {
    title: `${capitalize(usuario.nome)} - Teste DISC`,
  };
}

export default async function Page({ params }: PageProps) {
  const { id: inscricaoId, usuarioId } = await params;

  const usuario = await getTesteDiscUsuario({ inscricaoId, usuarioId });

  const questionario = await getTesteDiscQuestionario({
    inscricaoId,
    usuarioId,
  });

  return (
    <main className="mx-auto w-full max-w-7xl">
      {usuario.progresso === 100 ? (
        <ResultadoUsuario
          inscricaoId={inscricaoId}
          usuario={usuario}
          usuarioId={usuarioId}
        />
      ) : (
        <Card.Root>
          <Card.Body>
            <h1 className="text-center text-xl leading-tight font-semibold">
              {firstName({ fullName: usuario.nome, ucfirst: true })}, escolha o
              adjetivo que você mais se identifica.
            </h1>
            <p className="text-center text-sm leading-tight">
              Se houver mais de um que descreva você, escolha o que acha que
              mais combina.
            </p>
            <Questionario
              inscricaoId={inscricaoId}
              usuarioId={usuarioId}
              questionario={questionario}
            />
          </Card.Body>
        </Card.Root>
      )}
    </main>
  );
}
