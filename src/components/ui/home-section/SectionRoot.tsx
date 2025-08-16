import { twMerge } from 'tailwind-merge';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionRoot({ children, className }: SectionProps) {
  return (
    <section className={twMerge('relative px-4 py-24', className)}>
      {children}
    </section>
  );
}
