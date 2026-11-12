import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type FieldContainerProps = ComponentProps<'div'> & {
  children: ReactNode;
  required?: boolean;
  disabled?: boolean;
  error?: boolean | undefined;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  invalid?: boolean;
};

export function FieldContainer({
  children,
  disabled,
  size = 'md',
  className,
  error,
  ...props
}: FieldContainerProps) {
  return (
    <div
      data-disabled={disabled}
      aria-disabled={disabled}
      aria-invalid={props['aria-invalid']}
      data-size={size}
      className={twMerge(
        'border-input relative flex flex-row items-center gap-1.5 rounded border bg-transparent',
        'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        disabled && 'bg-border/20',
        error &&
          'focus-within:ring-destructive/20 dark:ring-destructive/40 border-destructive',
        size === 'xs' && 'min-h-8 px-2',
        size === 'sm' && 'min-h-9 px-2',
        size === 'md' && 'min-h-10 px-3',
        // 'hover:border-primary/80 flex items-center rounded border border-slate-300',
        // 'focus-within:border-primary/80 focus-within:ring-primary/40 focus-within:ring-2',
        // 'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        // size === 'md' && 'h-9 px-3',
        // error === true &&
        // 'border-red-400 focus-within:border-red-500 focus-within:ring-red-200 hover:border-red-500',
        className,
      )}
      // className={cn(
      //   'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      //   'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      //   'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
      //   className,
      // )}
    >
      {children}
    </div>
  );
}
