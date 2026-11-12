'use client';

import { useDataTableContext } from './DataTableContext';

const DEFAULT_OPTIONS = [10, 15, 25, 50];

export function DataTablePageSizeSelect({
  options = DEFAULT_OPTIONS,
}: {
  options?: number[];
}) {
  const { pageSize, onPageSizeChange } = useDataTableContext();

  return (
    <div className="flex items-center gap-2 text-sm text-slate-600">
      <span>Linhas por página</span>
      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        className="h-8 rounded-md border px-2 text-sm outline-none"
      >
        {options.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
}
