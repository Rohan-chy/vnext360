'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import clsx from 'clsx';
import { NepaliDatePicker } from 'nepali-datepicker-reactjs';
import 'nepali-datepicker-reactjs/dist/index.css';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface NepaliDatePickerFieldProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  className?: string;
  disabled?: boolean;
  isRequired?: boolean;
}

export function NepaliDatePickerFieldClient<
  TFieldValues extends FieldValues = FieldValues,
>({
  form,
  name,
  label,
  className,
  disabled = false,
  isRequired,
}: NepaliDatePickerFieldProps<TFieldValues>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => {
        const disabledClass = disabled
          ? 'border-gray-300 bg-muted cursor-not-allowed pointer-events-none'
          : '';

        const hasError = fieldState.error
          ? 'border-red-500 border-2'
          : 'border';

        return (
          <FormItem>
            <FormControl>
              <div className="relative">
                {/* Floating Label */}
                {label && (
                  <label
                    className={clsx(
                      'pointer-events-none absolute left-3 -top-2 z-10 bg-background px-1 text-[10px]',
                      fieldState.error && 'text-destructive'
                    )}
                  >
                    {label}
                    {isRequired && (
                      <span className="ml-0.5 text-red-500">*</span>
                    )}
                  </label>
                )}

                <NepaliDatePicker
                  value={field.value}
                  onChange={(value: string) => {
                    if (!disabled) {
                      field.onChange(value);
                    }
                  }}
                  options={{
                    calenderLocale: 'ne',
                    valueLocale: 'en',
                  }}
                  inputClassName={clsx(
                    'h-9 w-full rounded-md bg-background px-3 text-sm',
                    'focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring',
                    hasError,
                    disabledClass,
                    className
                  )}
                />
              </div>
            </FormControl>

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
