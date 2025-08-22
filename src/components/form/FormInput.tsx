interface FormInputProps {
  label: string;
  required?: boolean;
  helper?: string;
  error?: string;
  children: React.ReactNode;
}

export function FormInput({
  label,
  required,
  helper,
  error,
  children,
}: FormInputProps) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {children}
      <div className="mt-1">
        {helper && !error && <p className="text-xs text-gray-500">{helper}</p>}
        {error && (
          <p role="alert" className="text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
