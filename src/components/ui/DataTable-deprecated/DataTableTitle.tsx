import { twMerge } from 'tailwind-merge';

export function DataTableTitle({
  className,
  ...props
}: React.ComponentProps<'h2'>) {
  return (
    <div
      data-slot="datatable-title"
      className={twMerge('leading-none font-semibold', className)}
      {...props}
    />
  );
}
