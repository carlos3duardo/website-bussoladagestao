import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface CtaButtonProps {
  label: string;
  linkUrl: string;
  variant?: 'primary' | 'secondary';
  target?: string;
  className?: string;
}

export function CtaButton({
  label,
  linkUrl,
  variant = 'primary',
  target = '_self',
  className,
}: CtaButtonProps) {
  return (
    <Link
      href={linkUrl}
      data-variant="primary"
      className={twMerge('relative hover:cursor-pointer', className)}
      target={target}
    >
      <span
        className={twMerge(
          'absolute top-0 left-0 h-full w-full rounded-md',

          variant === 'primary' && 'bg-primary-900',
          variant === 'secondary' && 'bg-darken',
        )}
      />
      <span
        className={twMerge(
          'relative flex items-center justify-center rounded-md px-9 py-4.5 text-base font-medium text-nowrap text-white transition-transform hover:-translate-y-1',
          variant === 'primary' && 'bg-primary-500',
          variant === 'secondary' && 'bg-dark',
        )}
      >
        {label}
      </span>
    </Link>
  );
}
