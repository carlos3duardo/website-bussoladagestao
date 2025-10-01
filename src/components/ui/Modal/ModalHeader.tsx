import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ModalHeaderProps = ComponentProps<'div'> & {
  title: string;
  subtitle?: string;
  label?: string;
};

export function ModalHeader({
  children,
  className,
  title,
  subtitle,
  label,
  ...rest
}: ModalHeaderProps) {
  return (
    <div
      data-slot="modal-header"
      className={twMerge('mb-3 flex flex-col gap-2 px-4 pt-4', className)}
      {...rest}
    >
      {label && (
        <span className="text-xs leading-none font-semibold text-slate-400">
          {label}
        </span>
      )}
      <h2 className="text-lg leading-none font-semibold text-balance">
        {title}
      </h2>
      {subtitle && (
        <h3 className="text-sm leading-none font-semibold opacity-60">
          {subtitle}
        </h3>
      )}
      {children}
    </div>
  );
}
