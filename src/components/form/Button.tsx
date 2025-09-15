import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
};

export function Button({
  variant = 'primary',
  isLoading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'w-full flex justify-center items-center h-12 px-4 rounded font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary:
      'bg-primary-500 text-white hover:bg-primary-700 focus:ring-primary-900',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : (
        children
      )}
    </button>
  );
}
