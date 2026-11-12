'use client';

import { LayoutGrid, List, Search } from 'lucide-react';

import { useDataTableContext } from './DataTableContext';

// searchPlaceholder é uma prop normal, não um campo do Context — é texto
// ESTÁTICO específico de cada tabela ("Buscar colaborador...", "Buscar
// produto..."), não um pedaço de ESTADO compartilhado que muda com o tempo.
// A regra pra decidir "isso vai pro Context ou fica prop?" é essa: estado
// que muda e vários componentes precisam ler -> Context. Configuração fixa
// de uma instância específica -> prop direto no componente que usa.
export function DataTableToolbar({
  searchPlaceholder = 'Buscar...',
}: {
  searchPlaceholder?: string;
}) {
  const { searchValue, onSearchChange, view, onViewChange } =
    useDataTableContext();

  return (
    <div className="flex w-full items-center justify-between gap-3">
      <div className="relative max-w-xs flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="h-9 w-full rounded-md border pr-3 pl-8 text-sm outline-none"
        />
      </div>

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
    </div>
  );
}
