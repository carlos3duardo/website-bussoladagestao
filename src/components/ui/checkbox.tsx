'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface CheckboxProps extends React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> {
  label?: string;
  error?: string;
  description?: string;
}

function Checkbox({ className, label, description, ...props }: CheckboxProps) {
  return (
    <label
      className={cn('grid grid-cols-[min-content_1fr] gap-x-2 py-1', className)}
    >
      <div className="flex items-center">
        <CheckboxPrimitive.Root
          data-slot="checkbox"
          className={cn(
            'peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-5 shrink-0 rounded border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            data-slot="checkbox-indicator"
            className="grid place-content-center text-current transition-none"
          >
            <CheckIcon className="size-4" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      </div>
      <div>{label && <span className="text-sm font-medium">{label}</span>}</div>
      {description && (
        <span className="text-muted-foreground/80 col-start-2 text-sm font-medium">
          {description}
        </span>
      )}
    </label>
  );
}

export { Checkbox };
