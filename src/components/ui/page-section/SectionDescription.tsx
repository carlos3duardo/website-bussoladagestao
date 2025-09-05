import { twMerge } from 'tailwind-merge';

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionDescription({ children, className }: DescriptionProps) {
  return (
    <p className={twMerge('text-base text-balance', className)}>{children}</p>
  );
}
