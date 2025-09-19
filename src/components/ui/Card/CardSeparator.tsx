import { twMerge } from 'tailwind-merge';

export function CardSeparator({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-separator"
      className={twMerge('bg-border h-[1px] w-full', className)}
      {...props}
    />
  );
}
