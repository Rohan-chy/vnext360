'use client';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import clsx from 'clsx';
import { FloatingLabelInput } from '../extended/floating-label-input';
import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
  Path,
  PathValue,
  UseFormReturn,
} from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { FloatingLabelInputPatient } from '../extended/floating-label-input-patient';

interface FormInputProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  value?: PathValue<TFieldValues, Path<TFieldValues>>;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: FieldError;
  isRequired?: boolean;

  /** NEW */
  showPasswordToggle?: boolean;
}

export function FloatingLabelFormInputForClient<
  TFieldValues extends FieldValues = FieldValues,
>({
  form,
  name,
  label,
  type = 'text',
  disabled = false,
  className,
  onChange,
  error,
  isRequired,
  showPasswordToggle = false,
}: FormInputProps<TFieldValues>) {
  const [showPassword, setShowPassword] = useState(false);

  const disabledBorderClass = disabled
    ? 'border-gray-300 cursor-not-allowed'
    : '';
  const hasError = error ? 'border-red-500 border-2' : '';

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<TFieldValues, typeof name>
  ) => {
    let value: string | number = event.target.value;

    if (type === 'number') {
      value = value === '' ? '' : Number(value);
      if (Number.isNaN(value)) value = 0;
    }

    field.onChange(value);
    onChange?.(event);

    if (type === 'date') {
      event.target.blur();
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (['date', 'datetime-local', 'time'].includes(type)) {
      (event.target as HTMLInputElement).showPicker();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Enter' &&
      ['date', 'datetime-local', 'time'].includes(type)
    ) {
      event.preventDefault();
      (event.target as HTMLInputElement).showPicker();
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative">
              <FloatingLabelInputPatient
                type={inputType}
                readOnly={disabled}
                label={label}
                isRequired={isRequired}
                {...field}
                className={clsx(
                  className,
                  disabledBorderClass,
                  hasError,
                  type === 'password' && showPasswordToggle && 'pr-10'
                )}
                onChange={(event) => handleOnChange(event, field)}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
              />

              {/* Password toggle */}
              {type === 'password' && showPasswordToggle && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
