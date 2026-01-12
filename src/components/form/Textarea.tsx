import { TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { InputContainer } from './InputContainer';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  registration?: UseFormRegisterReturn;
  className?: string;
  containerClassName?: string;
};

export function Textarea({
  label,
  error,
  registration,
  className,
  containerClassName,
  ...props
}: TextAreaProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <InputContainer
        className={twMerge('h-auto py-2', containerClassName)}
        error={!!error}
      >
        <textarea
          {...registration}
          {...props}
          className={twMerge(
            'w-full bg-transparent text-base font-medium text-slate-600 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          style={{
            // Remove o background amarelo do autocomplete
            WebkitBoxShadow: '0 0 0px 1000px white inset',
            boxShadow: '0 0 0px 1000px white inset',
            caretColor: 'var(--color-primary-500)',
          }}
        ></textarea>
      </InputContainer>

      {error && (
        <span className="text-xs font-medium text-red-500">{error}</span>
      )}
    </div>
  );
}
