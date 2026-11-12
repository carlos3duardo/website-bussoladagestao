'use client';

import type { LucideIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

// Não usa o <Button> de '@/components/ui' de propósito: ele não repassa `ref`,
// e o <Popover.Trigger asChild> do Radix precisa do ref para posicionar o
// popover e controlar o foco.
interface FilterTriggerProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: string;
  icon?: LucideIcon;
  count: number;
}

const FilterTrigger = React.forwardRef<HTMLButtonElement, FilterTriggerProps>(
  ({ label, icon: Icon, count, className, type = 'button', ...props }, ref) => {
    const active = count > 0;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex h-9 cursor-pointer items-center gap-1.5 rounded border bg-white px-3 text-sm font-medium text-slate-700 transition',
          'focus:ring-primary-300 hover:bg-slate-50 focus:ring-2 focus:ring-offset-1 focus:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-60',
          active
            ? 'border-primary-500 text-primary-600 hover:bg-primary-50'
            : 'border-slate-300',
          className,
        )}
        {...props}
      >
        {Icon && <Icon size={14} strokeWidth={2.5} />}
        {label}
        {active && (
          <span className="bg-primary-500 ml-0.5 flex h-5 min-w-5 items-center justify-center rounded px-1 text-xs font-semibold text-white">
            {count}
          </span>
        )}
      </button>
    );
  },
);
FilterTrigger.displayName = 'FilterTrigger';

export { FilterTrigger };
