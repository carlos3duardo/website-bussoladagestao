import clsx from 'clsx';
import { ButtonHTMLAttributes, ElementType } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
  icon?: ElementType;
  iconPosition?: 'left' | 'right';
};

export function Button({
  variant = 'primary',
  isLoading = false,
  className,
  children,
  icon: Icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) {
  const baseStyles =
    'flex justify-center items-center gap-2 h-12 px-4 rounded font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer';

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
        <>
          {Icon && iconPosition === 'left' && <Icon size={18} />}
          {children}
          {Icon && iconPosition === 'right' && <Icon size={18} />}
        </>
      )}
    </button>
  );
}
