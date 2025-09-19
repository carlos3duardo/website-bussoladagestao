import { Copy, Link as LinkIcon, Users } from 'lucide-react';
import Link from 'next/link';

import { CardInfo } from '@/components/ui/CardInfo';
import { getTesteDiscInscricao } from '@/lib/api';
import { firstName } from '@/lib/helpers';

import { UsuarioTabela } from './components/UsuarioTabela';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const testeDisc = await getTesteDiscInscricao({ id });

  return (
    <main className="mx-auto w-full max-w-7xl">
      <h1 className="text-xl font-semibold">
        Olá, {firstName({ fullName: testeDisc.usuario, ucfirst: true })}.
      </h1>

      <div className="mt-6 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9">
          <CardInfo.Default
            icon={LinkIcon}
            label="Link para o teste DISC"
            description="Compartilhe com a sua equipe"
          >
            <div className="flex items-center gap-3">
              <Link
                href={testeDisc.url_questionario}
                className="text-inherit hover:underline"
                target="_blank"
              >
                {testeDisc.url_questionario}
              </Link>
              <button className="cursor-pointer" title="Copiar URL">
                <Copy size={22} strokeWidth={2} />
              </button>
            </div>
          </CardInfo.Default>
        </div>
        <div className="col-span-12 md:col-span-3">
          <CardInfo.Default icon={Users} label="Testes realizados">
            {testeDisc.usuarios}
          </CardInfo.Default>
        </div>
      </div>

      <br />
      <div className="mx-auto max-w-7xl">
        <UsuarioTabela inscricaoId={id} />
      </div>
    </main>
  );
}
