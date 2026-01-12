import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function SectionRoot({ className, ...rest }: ComponentProps<'section'>) {
  return <section className={twMerge('relative py-24', className)} {...rest} />;
}
