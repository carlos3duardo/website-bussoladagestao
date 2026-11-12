// datatable-v2/filters/FilterDropdown.tsx
import type { LucideIcon } from 'lucide-react';
import { Search } from 'lucide-react';
import { Popover } from 'radix-ui';
import * as React from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

import { Button } from '../../Button';
import { FilterTrigger } from './FilterTrigger';

interface FilterOption {
  id: string | number;
  label: string;
}

interface FilterDropdownProps {
  label: string;
  icon?: LucideIcon;
  options: FilterOption[];
  searchPlaceholder?: string;
  value: (string | number)[];
  onChange: (value: (string | number)[]) => void;
}

function FilterDropdown({
  label,
  icon,
  options,
  searchPlaceholder = 'Buscar...',
  value,
  onChange,
}: FilterDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');

  // Rascunho: só isso é lido/escrito pelos checkboxes enquanto o popover
  // está aberto. "value" (o que está de fato aplicado no filtro da tabela)
  // só muda quando o usuário clica em Aplicar.
  const [draft, setDraft] = React.useState<(string | number)[]>(value);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) {
      // Abrindo: sincroniza o rascunho com o valor real aplicado — cobre o
      // caso de "value" ter mudado por fora (ex: outro filtro resetou tudo)
      // desde a última vez que esse popover foi aberto.
      setDraft(value);
    } else {
      // Fechando sem clicar em Aplicar (Esc, clique fora): o rascunho é
      // descartado. Só a busca precisa ser limpa aqui — o draft já vai ser
      // resincronizado na próxima abertura, então não precisa zerar agora.
      setSearch('');
    }
  }

  const draftSet = React.useMemo(() => new Set(draft), [draft]);

  function toggle(id: string | number) {
    setDraft((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  }

  function handleApply() {
    onChange(draft);
  }

  function handleClear() {
    setDraft([]);
    onChange([]); // imediato, mesmo com rascunho pendente
  }

  const filteredOptions = React.useMemo(() => {
    if (!search.trim()) return options;
    const term = search.trim().toLowerCase();
    return options.filter((option) =>
      option.label.toLowerCase().includes(term),
    );
  }, [options, search]);

  function haveSameSelection(a: (string | number)[], b: (string | number)[]) {
    if (a.length !== b.length) return false;
    const setA = new Set(a);
    return b.every((v) => setA.has(v));
  }

  const hasChanges = React.useMemo(
    () => !haveSameSelection(draft, value),
    [draft, value],
  );

  return (
    <Popover.Root open={open} onOpenChange={handleOpenChange}>
      <Popover.Trigger asChild>
        <FilterTrigger label={label} icon={icon} count={value.length} />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={8}
          className="text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 w-72 rounded-md border border-slate-400 bg-slate-100 p-3 shadow-md"
        >
          <Input
            icon={Search}
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            containerClassName="mb-2"
          />

          <ul className="flex max-h-64 flex-col overflow-y-auto">
            {filteredOptions.length === 0 && (
              <li className="px-2 py-3 text-center text-sm text-slate-400">
                Nenhum resultado encontrado
              </li>
            )}
            {filteredOptions.map((option) => {
              const checked = draftSet.has(option.id);
              return (
                <li key={option.id} className="hover:bg-accent rounded px-2">
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => toggle(option.id)}
                    label={option.label}
                  />
                </li>
              );
            })}
          </ul>

          <div className="mt-2 flex items-center justify-between border-t border-slate-400 pt-2">
            <Button
              color="default"
              size="sm"
              onClick={handleClear}
              disabled={value.length === 0 && draft.length === 0}
            >
              Limpar filtros
            </Button>
            <Popover.Close asChild>
              <Button
                color="primary"
                size="sm"
                onClick={handleApply}
                disabled={!hasChanges}
              >
                Aplicar
              </Button>
            </Popover.Close>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export { FilterDropdown };
