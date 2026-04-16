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

export function NepaliDatePickerField<
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
        const hasError = fieldState.error ? 'border-red-500 border' : '';

        return (
          <FormItem className="space-y-1">
            <FormControl>
              <div className="relative">
                {/* Floating label */}
                {label && (
                  <label
                    className={clsx(
                      'pointer-events-none absolute left-2 -top-2 z-10 bg-background px-1 text-[10px]',
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
                  onChange={(value: string) => field.onChange(value)}
                  options={{
                    calenderLocale: 'ne',
                    valueLocale: 'en',
                  }}
                  inputClassName={clsx(
                    'h-6 w-full rounded-md border border-black bg-background px-2 text-xs font-bold leading-6',
                    'focus:border-ring focus:ring-1 focus:ring-ring',
                    disabled && 'cursor-not-allowed bg-muted',
                    hasError,
                    className
                  )}
                />
              </div>
            </FormControl>

            <FormMessage className="text-[10px]" />
          </FormItem>
        );
      }}
    />
  );
}
