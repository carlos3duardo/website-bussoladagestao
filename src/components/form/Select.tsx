import { SelectHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { InputContainer } from './InputContainer';

type OptionProps = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  registration: UseFormRegisterReturn;
  options: OptionProps[];
};

export function Select({
  label,
  error,
  registration,
  options,
  ...props
}: SelectProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <InputContainer error={!!error}>
        <select
          {...registration}
          {...props}
          className={twMerge(
            'w-full bg-transparent text-base font-medium placeholder-slate-400 outline-none disabled:cursor-not-allowed disabled:opacity-50',
          )}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </InputContainer>

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
