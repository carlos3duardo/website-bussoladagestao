import { twMerge } from 'tailwind-merge';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionParagraph({ children, className }: ParagraphProps) {
  return (
    <p
      className={twMerge(
        'mx-auto w-full max-w-[920px] text-justify text-xl font-medium',
        className,
      )}
    >
      {children}
    </p>
  );
}
