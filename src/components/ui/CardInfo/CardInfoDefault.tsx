import { ElementType, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardInfoProps {
  label: string;
  description?: string;
  icon: ElementType;
  iconClassName?: string;
  children: ReactNode;
}

export function CardInfoDefault({
  label,
  description,
  icon: Icon,
  children,
  iconClassName,
}: CardInfoProps) {
  return (
    <div
      data-slot="card"
      className="border-primary-100 bg-primary-50 flex flex-col gap-2 rounded-md border p-4"
    >
      <div
        data-slot="card-header"
        className="flex items-center gap-2 text-sm font-medium"
      >
        <h4 className="text-slate-900">{label}</h4>
        {description && (
          <span className="text-slate-900/40">{description}</span>
        )}
      </div>
      <div data-slot="card-body" className="flex items-center gap-2">
        <figure className="bg-primary-100 flex h-12 w-12 items-center justify-center rounded-sm">
          <Icon
            size={24}
            strokeWidth={2.5}
            className={twMerge('text-primary-500/50', iconClassName)}
          />
        </figure>
        <div
          data-slot="card-value"
          className="text-3xl leading-tight font-bold"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
