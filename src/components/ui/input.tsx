import { LoaderCircle } from 'lucide-react';
import { ComponentProps, ElementType } from 'react';

import { cn } from '@/lib/utils';

import { FieldContainer } from './field-container';

export interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
  uppercase?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  containerClassName?: string;
  icon?: ElementType;
  isLoading?: boolean;
}

function Input({
  className,
  type,
  uppercase = false,
  size = 'md',
  containerClassName = '',
  disabled = false,
  isLoading = false,
  icon: Icon,
  ...props
}: InputProps) {
  return (
    <FieldContainer
      aria-invalid={props['aria-invalid']}
      size={size}
      disabled={disabled}
      className={containerClassName}
    >
      {Icon && <Icon className="text-foreground/90 h-4 w-4" />}
      <input
        type={type}
        data-slot="input"
        className={cn(
          'w-full text-sm font-medium focus:outline-none',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          uppercase && 'uppercase',
          className,
        )}
        disabled={disabled}
        {...props}
      />
      {isLoading && (
        <div className="-mr-2.5 flex h-8 w-8 items-center justify-center opacity-80">
          <LoaderCircle className="animate-spin" size={16} />
        </div>
      )}
    </FieldContainer>
  );
}

export { Input };
