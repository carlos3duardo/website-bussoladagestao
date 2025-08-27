import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface PageContentProps {
  children: ReactNode;
  className?: string;
}

export function PageContent({ children, className }: PageContentProps) {
  return <div className={twMerge('py-24', className)}>{children}</div>;
}
