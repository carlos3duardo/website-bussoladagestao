import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type InputContainerProps = ComponentProps<'div'> & {
  children: ReactNode;
  required?: boolean;
  disabled?: boolean;
  error?: boolean | undefined;
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

export function InputContainer({
  children,
  error,
  required,
  disabled,
  size = 'md',
  className,
}: InputContainerProps) {
  return (
    <div
      data-required={required}
      aria-required={required}
      data-disabled={disabled}
      aria-disabled={disabled}
      data-size={size}
      className={twMerge(
        'bg-white',
        'hover:border-primary-400 flex h-12 items-center rounded border border-slate-300 px-3',
        'focus-within:border-primary-500 focus-within:ring-primary-200 focus-within:ring-2',
        error === true &&
          'border-red-400 focus-within:border-red-500 focus-within:ring-red-200',
        className,
      )}
    >
      {children}
    </div>
  );
}
