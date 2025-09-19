'use client';

import Color from 'color';
import { Cog, Hourglass, MessagesSquare, Target } from 'lucide-react';
import Link from 'next/link';

import { Card, DataTable } from '@/components/ui';
import { DataTableColumnProps } from '@/components/ui/DataTable';
import { dateBr, dateTimeBr } from '@/lib/helpers';
import { ApiTesteDiscUsuarioTableRowProps } from '@/types';

interface UsuarioTabelaProps {
  inscricaoId: string;
}

export function UsuarioTabela({ inscricaoId }: UsuarioTabelaProps) {
  const icones: Record<number, React.ReactNode> = {
    1: <Target size={16} strokeWidth={2.5} />,
    2: <MessagesSquare size={16} strokeWidth={2.5} />,
    3: <Hourglass size={16} strokeWidth={2.5} />,
    4: <Cog size={16} strokeWidth={2.5} />,
  };

  const columns = [
    {
      field: 'nome',
      label: 'Nome',
      thClassName: 'text-left',
      content: ({ id, nome, conclusao }: ApiTesteDiscUsuarioTableRowProps) => {
        return conclusao ? (
          <Link href={`/disc/${inscricaoId}/usuario/${id}`} target="_blank">
            {nome}
          </Link>
        ) : (
          nome
        );
      },
    },
    {
      field: 'cargo',
      label: 'Cargo',
      thClassName: 'text-left',
      tdClassName: 'text-left',
    },
    {
      field: 'created_at',
      label: 'Data',
      thClassName: 'text-center',
      tdClassName: 'text-center',
      content: ({ created_at }: ApiTesteDiscUsuarioTableRowProps) => {
        return <span title={dateTimeBr(created_at)}>{dateBr(created_at)}</span>;
      },
    },
    {
      field: 'perfil.nome',
      label: 'Perfil',
      thClassName: 'text-left',
      tdClassName: 'text-left py-0',
      content: ({
        perfil,
        questoes,
        respostas,
      }: ApiTesteDiscUsuarioTableRowProps) => {
        const progresso = Math.floor((respostas / questoes) * 100);
        const backgroundColor = perfil
          ? Color(perfil.cor).darken(0.1).hex()
          : '#ffffff';

        return perfil ? (
          <div
            className="inline-flex items-center gap-1 rounded px-2 py-2 text-white"
            style={{
              backgroundColor,
              color: Color(backgroundColor).isLight()
                ? Color(backgroundColor).darken(0.8).hex()
                : Color(backgroundColor).lighten(0.8).hex(),
            }}
          >
            <span>{icones[perfil.id]}</span>
            <span className="text-xs">{perfil.nome}</span>
          </div>
        ) : (
          <div className="flex flex-col">
            <span className="text-xs">Teste em andamento. Aguarde...</span>
            <span className="block h-1 w-[220px] rounded-full bg-slate-300">
              <span
                className="bg-primary-400 block h-1 rounded-full"
                style={{ width: `${progresso}%` }}
                data-progress={progresso}
              />
            </span>
          </div>
        );
      },
    },
  ] as DataTableColumnProps[];

  return (
    <DataTable.Root>
      <DataTable.Header>
        <DataTable.HeaderSection>
          <Card.Title>Histórico de testes realizados</Card.Title>
        </DataTable.HeaderSection>
      </DataTable.Header>
      <DataTable.Content
        queryId={`inscricao-${inscricaoId}-usuarios`}
        dataSrc={`/api/trial/disc/${inscricaoId}/usuario`}
        columns={columns}
        refetchInterval={30}
      />
      <DataTable.Footer>
        <DataTable.FooterSection>
          <DataTable.PagesCount />
        </DataTable.FooterSection>
        <DataTable.FooterSection>
          <DataTable.Pagination pageSiblingsCount={1} />
        </DataTable.FooterSection>
      </DataTable.Footer>
    </DataTable.Root>
  );
}
