interface LabelProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
}

export function Label({ children, variant = 'solid' }: LabelProps) {
  return (
    <h3
      data-variant={variant}
      className="data-[variant=solid]:bg-primary-500 data-[variant=solid]:border-primary-500 border-primary-200 bg-primary-400/10 text-primary-700 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow data-[variant=solid]:text-white"
    >
      {children}
    </h3>
  );
}
