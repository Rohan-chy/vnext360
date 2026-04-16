import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';

interface FormCheckboxProps {
  name: string;
  form: any;
  label?: string;
  className?: string;
  disabled?: boolean;
  isRequired?: boolean;
}

export function FormCheckbox({
  name,
  form,
  label,
  className,
  disabled,
  isRequired,
}: FormCheckboxProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('flex flex-col gap-1', className)}>
          <label className="flex items-center gap-2 text-sm font-medium">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                disabled={disabled}
              />
            </FormControl>

            {label && (
              <span>
                {label}
                {isRequired && <span className="text-red-500 ml-1">*</span>}
              </span>
            )}
          </label>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
