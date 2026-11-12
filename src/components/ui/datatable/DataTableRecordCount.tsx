'use client';

import { useDataTableContext } from './DataTableContext';

interface DataTableRecordCountProps {
  /** Customiza o texto — recebe o total e devolve a string final. */
  format?: (total: number) => string;
}

const defaultFormat = (total: number) =>
  `${total} registro${total === 1 ? '' : 's'} encontrado${total === 1 ? '' : 's'}`;

export function DataTableRecordCount({
  format = defaultFormat,
}: DataTableRecordCountProps) {
  const { total, isLoading } = useDataTableContext();

  // Evita mostrar "0 registros" por um instante durante o primeiro
  // carregamento (antes da primeira resposta da API chegar).
  if (isLoading && total === 0) return null;

  return <span className="text-sm text-slate-600">{format(total)}</span>;
}
