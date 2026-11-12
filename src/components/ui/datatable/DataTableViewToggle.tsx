'use client';

import { LayoutGrid, List } from 'lucide-react';

import { useDataTableContext } from './DataTableContext';

export function DataTableViewToggle() {
  const { view, onViewChange } = useDataTableContext();

  return (
    <div className="inline-flex rounded-md border p-0.5">
      <button
        type="button"
        onClick={() => onViewChange('table')}
        aria-pressed={view === 'table'}
        aria-label="Visualização em tabela"
        className={`inline-flex h-7 w-7 items-center justify-center rounded-sm ${
          view === 'table' ? 'text-foreground bg-slate-200' : 'text-slate-400'
        }`}
      >
        <List className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => onViewChange('grid')}
        aria-pressed={view === 'grid'}
        aria-label="Visualização em grade"
        className={`inline-flex h-7 w-7 items-center justify-center rounded-sm ${
          view === 'grid' ? 'text-foreground bg-slate-200' : 'text-slate-400'
        }`}
      >
        <LayoutGrid className="h-4 w-4" />
      </button>
    </div>
  );
}
