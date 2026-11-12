'use client';

import { Search } from 'lucide-react';

import { useDataTableContext } from './DataTableContext';

export function DataTableSearch({
  placeholder = 'Buscar...',
}: {
  placeholder?: string;
}) {
  const { searchValue, onSearchChange } = useDataTableContext();

  return (
    <div className="relative max-w-xs flex-1">
      <Search className="pointer-events-none absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="h-9 w-full rounded-md border pr-3 pl-8 text-sm outline-none"
      />
    </div>
  );
}
