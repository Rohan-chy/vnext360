import * as React from 'react';
import { cn } from '@/lib/utils';
// Importing base Input (shadcn)
import { Input as BaseInput } from '@/components/ui/input';

export interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isRequired?: boolean;
  eyeIcon?: React.ReactNode;
}

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ id, label, isRequired, eyeIcon, className, ...props }, ref) => {
  return (
    <div className="relative w-full">
      {/* Base Input with peer class */}
      <BaseInput
        id={id}
        ref={ref}
        placeholder=" "
        className={cn(
          'peer',
          className,
          'flex h-6 dark:border-white dark:text-white w-full rounded-sm border border-neutral-600 bg-white px-3 py-2 text-[12px] text-black font-bold ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-0 disabled:cursor-not-allowed read-only:cursor-not-allowed read-only:opacity-70 !disabled:opacity-100 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300'
        )}
        {...props}
      />
      {/* Floating Label */}
      <label
        htmlFor={id}
        className={cn(
          // "absolute start-3 top-2 z-10 origin-[0] -translate-y-3 scale-75 transform px-1 text-xs text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:start-3 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:start-3 peer-focus:-translate-y-3 peer-focus:scale-75 bg-background dark:bg-background",
          'peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-1 z-10 origin-left -translate-y-4 scale-75 transform bg-white px-2 text-[12px] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-neutral-950 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4',
          props.readOnly ? 'cursor-not-allowed' : ''
        )}
      >
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      {/* eye icon */}
      {eyeIcon && (
        <div className="absolute right-3 bottom-0 cursor-pointer  text-gray-500 hover:text-gray-700 dark:text-white">
          {eyeIcon}
        </div>
      )}
    </div>
  );
});
FloatingLabelInput.displayName = 'FloatingLabelInput';

export { FloatingLabelInput };
