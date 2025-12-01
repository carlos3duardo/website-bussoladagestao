'use client';

import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Color from 'color';
import { Cog, Hourglass, MessagesSquare, Target, Trash } from 'lucide-react';
import Link from 'next/link';
import { useCallback } from 'react';

import { Card, DataTable, Dialog } from '@/components/ui';
import { DataTableColumnProps } from '@/components/ui/DataTable';
import { dateBr, dateTimeBr } from '@/lib/helpers';
import { ApiTesteDiscUsuarioTableRowProps } from '@/types';
interface UsuarioTabelaProps {
  inscricaoId: string;
}

export function UsuarioTabela({ inscricaoId }: UsuarioTabelaProps) {
  const queryClient = useQueryClient();

  const icones: Record<number, React.ReactNode> = {
    1: <Target size={16} strokeWidth={2.5} />,
    2: <MessagesSquare size={16} strokeWidth={2.5} />,
    3: <Hourglass size={16} strokeWidth={2.5} />,
    4: <Cog size={16} strokeWidth={2.5} />,
  };

  const handleDeleteTest = useCallback(
    async (id: string) => {
      Dialog.ConfirmDelete.fire({
        title: 'Você deseja excluir o teste do usuário?',
        showCancelButton: true,
        confirmButtonText: 'Sim, excluir',
        cancelButtonText: 'Não, cancelar',
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          return axios
            .delete(`/api/trial/disc/${inscricaoId}/usuario/${id}`)
            .then(async () => {
              await queryClient.refetchQueries();
            })
            .catch((error) => {
              Dialog.Confirm.showValidationMessage(`Erro: ${error.message}`);
            });
        },
      });
    },
    [inscricaoId, queryClient],
  );

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
    {
      field: 'id',
      label: <>&nbsp;</>,
      thClassName: 'text-right',
      tdClassName: 'text-right',
      content: ({ id }: ApiTesteDiscUsuarioTableRowProps) => {
        return (
          <div className="flex justify-end">
            <button
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded bg-slate-100 hover:bg-red-100 hover:text-red-600"
              onClick={() => handleDeleteTest(id)}
            >
              <Trash size={14} strokeWidth={2.5} />
            </button>
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
        emptyMessage="Aguardando realização dos testes pelos usuários"
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
