import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ModalBodyProps = ComponentProps<'div'> & {};

export function ModalBody({ children, className, ...rest }: ModalBodyProps) {
  return (
    <div
      data-slot="modal-body"
      className={twMerge('relative mt-3 overflow-y-auto px-7 pb-4', className)}
      {...rest}
    >
      {children}
    </div>
  );
}
