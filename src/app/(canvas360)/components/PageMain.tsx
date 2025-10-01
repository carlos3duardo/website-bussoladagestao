import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface PageMainProps {
  children?: ReactNode;
  className?: string;
  resetCSS?: boolean;
}

export function PageMain({
  children,
  className = '',
  resetCSS = false,
}: PageMainProps) {
  return (
    <main className={twMerge(resetCSS ? '' : 'px-4 py-4 2xl:py-6', className)}>
      {children}
    </main>
  );
}
