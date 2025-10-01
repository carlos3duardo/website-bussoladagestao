import { twMerge } from 'tailwind-merge';

interface HeadlineProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeadline({ children, className }: HeadlineProps) {
  return (
    <h2
      className={twMerge(
        'text-5xl font-extrabold tracking-tighter text-balance',
        className,
      )}
    >
      {children}
    </h2>
  );
}
