interface LabelProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
}

export function SectionLabel({ children, variant = 'solid' }: LabelProps) {
  return (
    <h3
      data-variant={variant}
      className="data-[variant=solid]:bg-primary-500 data-[variant=outline]:text-primary-500 data-[variant=outline]:border-primary-500 inline-block rounded-full px-2.5 py-1.5 text-xs leading-none font-bold uppercase data-[variant=outline]:border data-[variant=solid]:text-white"
    >
      {children}
    </h3>
  );
}
