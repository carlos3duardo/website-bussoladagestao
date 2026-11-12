'use client';

import { ChevronsLeft, ChevronsRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import { useDataTableContext } from './DataTableContext';
import { getPageNumbers } from './lib/getPageNumbers';

export function DataTablePagination() {
  const {
    currentPage,
    totalPages,
    canPreviousPage,
    canNextPage,
    onPreviousPage,
    onNextPage,
    onGoToPage,
  } = useDataTableContext();

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={onPreviousPage}
        disabled={!canPreviousPage}
        className="hover:bg-primary-100 flex h-8 items-center justify-center rounded-md px-2 py-1 text-xs font-medium disabled:opacity-40"
      >
        <ChevronsLeft className="h-4 w-4" />
      </button>

      {pageNumbers.map((page, index) =>
        page === 'dots' ? (
          <span key={`dots-${index}`} className="px-2 text-slate-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onGoToPage(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={cn(
              'flex h-8 min-w-8 items-center justify-center rounded-md px-2 py-1 text-xs font-bold disabled:opacity-40',
              page === currentPage
                ? 'bg-primary-400 text-white'
                : 'hover:bg-primary-100',
            )}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={onNextPage}
        disabled={!canNextPage}
        className="hover:bg-primary-100 flex h-8 items-center justify-center rounded-md px-2 py-1 text-xs font-medium disabled:opacity-40"
      >
        <ChevronsRight className="h-4 w-4" />
      </button>
    </div>
  );
}
