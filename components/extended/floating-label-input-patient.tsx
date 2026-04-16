import * as React from 'react';
import { cn } from '@/lib/utils';
import { FocusRingInput } from './focus-ring-input';

export interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isRequired?: boolean;
  eyeIcon?: React.ReactNode;
}

const FloatingLabelInputPatient = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ id, label, isRequired, eyeIcon, className, ...props }, ref) => {
  return (
    <div className="relative w-full">
      {/* Base Input */}
      <FocusRingInput
        id={id}
        ref={ref}
        placeholder=" "
        className={cn(
          'peer w-full rounded-md border bg-white px-3 py-2 text-sm font-medium text-black dark:bg-neutral-950 dark:text-white',
          'disabled:cursor-not-allowed disabled:opacity-60 read-only:cursor-not-allowed read-only:opacity-70',
          className
        )}
        {...props}
      />

      {/* Floating Label */}
      <label
        htmlFor={id}
        className={cn(
          'pointer-events-none peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-1 z-10 origin-left -translate-y-4 scale-75 transform bg-white px-2 text-[12px] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-neutral-950 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 text-gray-500 dark:text-gray-400',
          props.readOnly ? 'cursor-not-allowed' : ''
        )}
      >
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>

      {/* Eye Icon */}
      {eyeIcon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white">
          {eyeIcon}
        </div>
      )}
    </div>
  );
});

FloatingLabelInputPatient.displayName = 'FloatingLabelInput';

export { FloatingLabelInputPatient };
