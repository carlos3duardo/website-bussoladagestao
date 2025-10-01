import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function CardRoot({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'flex flex-col rounded-lg border border-slate-50 bg-white shadow-sm',
        className,
      )}
      {...rest}
    />
  );
}
