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
import { useState } from 'react';

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
}

export function FloatingLabelFormInput<
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
}: FormInputProps<TFieldValues>) {
  const [fileName, setFileName] = useState<string | null>(null);

  const disabledBorderClass = disabled
    ? 'border-gray-300 cursor-not-allowed'
    : '';
  const hasError = error ? 'border-red-500 border-2' : '';

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

    if (type === 'date') event.target.blur();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<TFieldValues, typeof name>
  ) => {
    const file = event.target.files?.[0] || null;
    field.onChange(file);
    setFileName(file?.name || null);
    onChange?.(event);
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (type === 'date' || type === 'datetime-local' || type === 'time') {
      (event.target as HTMLInputElement).showPicker();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Enter' &&
      (type === 'date' || type === 'datetime-local' || type === 'time')
    ) {
      event.preventDefault();
      (event.target as HTMLInputElement).showPicker();
    }
  };

  //method to set only year,month,day into input field
  const formatDateForInput = (value?: string) => {
    if (!value) return '';
    const date = new Date(value);
    if (isNaN(date.getTime())) return '';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            {type === 'file' ? (
              <label
                htmlFor={field.name}
                className={clsx(
                  'border border-dashed border-black rounded-md px-2 py-0.5 flex items-center justify-between cursor-pointer',
                  disabledBorderClass,
                  hasError,
                  className,
                  disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                <span className="text-sm text-gray-700 truncate">
                  {fileName || 'No file chosen'}
                </span>
                <input
                  id={field.name}
                  type="file"
                  className="hidden"
                  disabled={disabled}
                  onChange={(event) => handleFileChange(event, field)}
                />
              </label>
            ) : (
              <FloatingLabelInput
                {...field}
                type={type}
                readOnly={disabled}
                label={label}
                isRequired={isRequired}
                className={clsx(className, disabledBorderClass, hasError)}
                value={
                  type === 'date' && field.value
                    ? formatDateForInput(field.value as string)
                    : field.value
                }
                onChange={(event) => handleOnChange(event, field)}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
