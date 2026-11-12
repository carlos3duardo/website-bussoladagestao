'use client';

import { useQueryClient } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import axios from 'axios';
import Color from 'color';
import {
  ChartBar,
  Cog,
  Hourglass,
  MessagesSquare,
  SquarePen,
  Target,
  Trash,
} from 'lucide-react';
import Link from 'next/link';

import { Card, Dialog } from '@/components/ui';
import { DataTable, useDataTable } from '@/components/ui/datatable';
import { dateBr } from '@/lib/helpers';
import { ApiTesteDiscUsuarioTableRowProps } from '@/types';

interface UsuarioTabelaProps {
  inscricaoId: string;
}

const icones: Record<number, React.ReactNode> = {
  1: <Target size={16} strokeWidth={2.5} />,
  2: <MessagesSquare size={16} strokeWidth={2.5} />,
  3: <Hourglass size={16} strokeWidth={2.5} />,
  4: <Cog size={16} strokeWidth={2.5} />,
};

export function UsuarioTabela({ inscricaoId }: UsuarioTabelaProps) {
  const queryClient = useQueryClient();

  const columns: ColumnDef<ApiTesteDiscUsuarioTableRowProps>[] = [
    {
      id: 'nome',
      header: 'Nome',
      accessorFn: (row) => row.nome,
      cell: ({ row }) => {
        return (
          <Link
            href={`/disc/${inscricaoId}/usuario/${row.original.id}`}
            target="_blank"
          >
            {row.original.nome}
          </Link>
        );
      },
      enableSorting: true,
    },
    {
      id: 'cargo',
      header: 'Cargo',
      accessorFn: (row) => row.cargo ?? '-',
      cell: ({ row }) => {
        return row.original.cargo ? (
          <Link
            href={`/cargo/${row.original.id}`}
            className="flex items-center gap-2.5 hover:text-blue-600"
          >
            {row.original.cargo}
          </Link>
        ) : (
          ''
        );
      },
      enableSorting: false,
    },
    {
      id: 'data',
      header: 'Data',
      accessorFn: (row) => row.conclusao ?? '-',
      cell: ({ row }) => {
        return dateBr(row.original.conclusao) ?? '-';
      },
      enableSorting: false,
    },
    {
      id: 'perfil',
      header: 'Perfil',
      accessorFn: (row) => row.perfil ?? '-',
      cell: ({ row }) => {
        const { perfil, questoes, respostas } = row.original;

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
      enableSorting: false,
    },
    {
      id: 'actions',
      header: '',
      accessorFn: (row) => row.id ?? '-',
      cell: ({ row }) => {
        const { id: testeId, perfil, nome, email } = row.original;

        return (
          <div className="flex justify-end gap-2">
            {perfil ? (
              <button
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-blue-100 hover:bg-blue-200 hover:text-blue-600"
                onClick={() =>
                  handleSendResultLink({ id: testeId, nome, email })
                }
                title="Enviar link de resultado"
              >
                <ChartBar size={16} strokeWidth={2.5} />
              </button>
            ) : (
              <button
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-orange-100 hover:bg-orange-200 hover:text-orange-600"
                onClick={() => handleSendFormLink({ id: testeId, nome, email })}
                title="Enviar link do teste"
              >
                <SquarePen size={16} strokeWidth={2.5} />
              </button>
            )}

            <button
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-red-100 hover:bg-red-200 hover:text-red-600"
              onClick={() => handleDeleteTest(testeId)}
            >
              <Trash size={16} strokeWidth={2.5} />
            </button>
          </div>
        );
      },
      enableSorting: false,
    },
  ];

  const { value, error, refetch } =
    useDataTable<ApiTesteDiscUsuarioTableRowProps>({
      apiUrl: `/api/trial/disc/${inscricaoId}/usuario`,
      columns,
    });

  // Declarada depois do useDataTable porque precisa do `refetch`. As células
  // só a chamam no clique, então não há problema de ordem.
  function handleDeleteTest(id: string) {
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
            // Recarrega a tabela (fetch próprio do useDataTable)...
            await refetch();
            // ...e o contador do DashboardHeader, que ainda usa React Query.
            await queryClient.invalidateQueries();
          })
          .catch((error) => {
            Dialog.Confirm.showValidationMessage(`Erro: ${error.message}`);
          });
      },
    });
  }

  function handleSendResultLink({
    id,
    nome,
    email,
  }: {
    id: string;
    nome: string;
    email: string;
  }) {
    const url = `${window.location.origin}/disc/${inscricaoId}/usuario/${id}`;

    Dialog.Confirm.fire({
      title: 'Enviar o resultado?',
      html: `Confirma enviar o link do resultado do teste para <strong>${nome}</strong> (${email})?`,
      showCancelButton: true,
      confirmButtonText: 'Sim, enviar',
      cancelButtonText: 'Não, cancelar',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        return axios
          .post(`/api/trial/disc/${inscricaoId}/usuario/${id}/enviar-link`, {
            url,
          })
          .then(async () => {
            Dialog.Success.fire({
              title: 'Link enviado com sucesso!',
              confirmButtonText: 'Fechar',
            });
          })
          .catch((error) => {
            Dialog.Confirm.showValidationMessage(`Erro: ${error.message}`);
          });
      },
    });
  }

  function handleSendFormLink({
    id,
    nome,
    email,
  }: {
    id: string;
    nome: string;
    email: string;
  }) {
    const url = `${window.location.origin}/disc/${inscricaoId}/usuario/${id}`;

    Dialog.Confirm.fire({
      title: 'Enviar o formulário?',
      html: `Confirma enviar o link do formulário para que <strong>${nome}</strong> (${email}) possa finalizar o teste?`,
      showCancelButton: true,
      confirmButtonText: 'Sim, enviar',
      cancelButtonText: 'Não, cancelar',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        return axios
          .post(`/api/trial/disc/${inscricaoId}/usuario/${id}/enviar-link`, {
            url,
          })
          .then(async () => {
            Dialog.Success.fire({
              title: 'Link enviado com sucesso!',
              confirmButtonText: 'Fechar',
            });
          })
          .catch((error) => {
            Dialog.Confirm.showValidationMessage(`Erro: ${error.message}`);
          });
      },
    });
  }

  if (error) {
    return (
      <div className="border-destructive/30 text-destructive rounded-md border p-4 text-sm">
        {error}
      </div>
    );
  }

  return (
    <div>
      <DataTable.Root value={value}>
        <Card.Root>
          <Card.Header>
            <Card.HeaderSection>
              <h2 className="font-bold">Histórico de testes realizados</h2>
            </Card.HeaderSection>
            <Card.HeaderSection>
              <DataTable.Search placeholder="Buscar usuário..." />
            </Card.HeaderSection>
          </Card.Header>
          <Card.Body>
            {value.isLoading && (
              <div className="bg-background/70 absolute inset-0 z-10 flex items-center justify-center rounded-xl">
                Carregando...
              </div>
            )}
            <DataTable.Content emptyMessage="Nenhum colaborador encontrado." />
          </Card.Body>
          <Card.Footer>
            <Card.FooterSection>
              <div className="flex items-center gap-2">
                <DataTable.PageSizeSelect />
                <DataTable.RecordCount
                  format={(total) =>
                    `${total} ${total === 1 ? 'usuário' : 'usuários'}`
                  }
                />
              </div>
            </Card.FooterSection>
            <Card.FooterSection>
              <DataTable.Pagination />
            </Card.FooterSection>
          </Card.Footer>
        </Card.Root>
      </DataTable.Root>
    </div>
  );
}
