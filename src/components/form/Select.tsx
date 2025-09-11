'use client';

import { SelectHTMLAttributes, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { InputContainer } from './InputContainer';

type OptionProps = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  placeholder?: string;
  error?: string;
  registration: UseFormRegisterReturn;
  options: OptionProps[];
};

export function Select({
  label,
  placeholder,
  error,
  registration,
  options,
  ...props
}: SelectProps) {
  const [value, setValue] = useState('');

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
            'w-full bg-transparent text-base font-medium outline-none disabled:cursor-not-allowed disabled:opacity-50',
            value === '' ? 'text-slate-400' : 'text-slate-600',
          )}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="" className="text-slate-400">
            {placeholder ?? 'Selecione'}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-slate-600"
            >
              {option.label}
            </option>
          ))}
        </select>
      </InputContainer>

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
