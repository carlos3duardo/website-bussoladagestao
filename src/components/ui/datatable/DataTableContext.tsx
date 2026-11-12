'use client';

import type { HeaderGroup, Row, Table } from '@tanstack/react-table';
import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

interface DataTableContextValue<TData> {
  // Paginação
  currentPage: number;
  totalPages: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onGoToPage: (page: number) => void;
  // Tamanho de página
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  // Toolbar
  searchValue: string;
  onSearchChange: (value: string) => void;
  view: 'table' | 'grid';
  onViewChange: (view: 'table' | 'grid') => void;
  // Content
  headerGroups: HeaderGroup<TData>[];
  rows: Row<TData>[];
  isLoading: boolean;
  // Total de registros
  total: number;
}

const DataTableContext = createContext<DataTableContextValue<unknown> | null>(
  null,
);

export function useDataTableContext<TData>(): DataTableContextValue<TData> {
  const ctx = useContext(DataTableContext);
  if (!ctx) {
    throw new Error(
      'Componentes DataTable.* devem ser usados dentro de <DataTable.Root>',
    );
  }
  return ctx as unknown as DataTableContextValue<TData>;
}

export function useDataTableContextValue<TData>(
  table: Table<TData>,
  extra: {
    searchValue: string;
    onSearchChange: (value: string) => void;
    view: 'table' | 'grid';
    onViewChange: (view: 'table' | 'grid') => void;
    isLoading: boolean;
    total: number;
  },
): DataTableContextValue<TData> {
  return {
    currentPage: table.getState().pagination.pageIndex + 1,
    totalPages: table.getPageCount(),
    canPreviousPage: table.getCanPreviousPage(),
    canNextPage: table.getCanNextPage(),
    onPreviousPage: () => table.previousPage(),
    onNextPage: () => table.nextPage(),
    onGoToPage: (page) => table.setPageIndex(page - 1),
    pageSize: table.getState().pagination.pageSize,
    onPageSizeChange: (size) => table.setPageSize(size),
    headerGroups: table.getHeaderGroups(),
    rows: table.getRowModel().rows,
    ...extra,
  };
}

export function DataTableRoot<TData>({
  value,
  children,
}: {
  value: DataTableContextValue<TData>;
  children: ReactNode;
}) {
  return (
    <DataTableContext.Provider
      value={value as unknown as DataTableContextValue<unknown>}
    >
      {children}
    </DataTableContext.Provider>
  );
}
