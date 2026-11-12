// datatable-v2/filters/ClearFiltersButton.tsx
import { X } from 'lucide-react';

import { Button } from '../../Button';

interface ClearFiltersProps {
  count: number;
  onClear: () => void;
}

export function ClearFiltersButton({ count, onClear }: ClearFiltersProps) {
  if (count === 0) return null;

  return (
    <Button color="destructive" size="sm" onClick={onClear}>
      Limpar filtros
      <X className="h-3.5 w-3.5" />
    </Button>
  );
}
