'use client';

import type { HeaderGroup, Row } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { ChevronDown, ChevronsUpDown, ChevronUp } from 'lucide-react';

import { useDataTableContext } from './DataTableContext';

interface DataTableContentProps {
  /**
   * Id da coluna que vira o "cabeçalho" do card no modo Grid (avatar+nome,
   * por exemplo). Opcional — sem isso, todas as colunas entram na lista
   * genérica de "campo: valor".
   */
  identityColumnId?: string;
  emptyMessage?: string;
}

export function DataTableContent<TData>({
  identityColumnId,
  emptyMessage = 'Nenhum resultado encontrado.',
}: DataTableContentProps) {
  const { view, headerGroups, rows, isLoading } = useDataTableContext<TData>();

  if (rows.length === 0 && !isLoading) {
    return (
      <div className="flex items-center justify-center rounded-md p-6 text-center text-sm text-slate-400">
        {emptyMessage}
      </div>
    );
  }

  return view === 'table' ? (
    <TableView headerGroups={headerGroups} rows={rows} />
  ) : (
    <GridView rows={rows} identityColumnId={identityColumnId} />
  );
}

function TableView<TData>({
  headerGroups,
  rows,
}: {
  headerGroups: HeaderGroup<TData>[];
  rows: Row<TData>[];
}) {
  return (
    <table className="relative w-full overflow-hidden border-b text-sm">
      <thead className="bg-slate-200">
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const canSort = header.column.getCanSort();
              const sortDirection = header.column.getIsSorted();

              return (
                <th
                  key={header.id}
                  className="bg-slate-200 p-2 text-left text-xs font-semibold text-slate-600 uppercase first:rounded-tl-md first:pl-4 last:rounded-tr-md last:pr-4"
                >
                  <button
                    type="button"
                    disabled={!canSort}
                    onClick={header.column.getToggleSortingHandler()}
                    className={`inline-flex items-center gap-1 ${
                      canSort
                        ? 'hover:text-foreground cursor-pointer'
                        : 'cursor-default'
                    }`}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {canSort &&
                      (sortDirection === 'asc' ? (
                        <ChevronUp className="h-3.5 w-3.5" />
                      ) : sortDirection === 'desc' ? (
                        <ChevronDown className="h-3.5 w-3.5" />
                      ) : (
                        <ChevronsUpDown className="h-3.5 w-3.5 opacity-40" />
                      ))}
                  </button>
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="border-b border-slate-200 px-2 py-3 text-sm font-medium first:pl-4 last:pr-4"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function GridView<TData>({
  rows,
  identityColumnId,
}: {
  rows: Row<TData>[];
  identityColumnId?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {rows.map((row) => {
        const cells = row.getVisibleCells();
        const identityCell = identityColumnId
          ? cells.find((cell) => cell.column.id === identityColumnId)
          : undefined;
        const otherCells = identityColumnId
          ? cells.filter((cell) => cell.column.id !== identityColumnId)
          : cells;

        return (
          <div key={row.id} className="rounded-lg border p-4">
            {identityCell && (
              <div className="mb-3 border-b pb-3">
                {flexRender(
                  identityCell.column.columnDef.cell,
                  identityCell.getContext(),
                )}
              </div>
            )}
            <dl className="space-y-1.5">
              {otherCells.map((cell) => (
                <div
                  key={cell.id}
                  className="flex items-baseline justify-between gap-3 text-sm"
                >
                  <dt className="shrink-0 text-slate-400">
                    {typeof cell.column.columnDef.header === 'string'
                      ? cell.column.columnDef.header
                      : cell.column.id}
                  </dt>
                  <dd className="truncate text-right font-medium">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        );
      })}
    </div>
  );
}
