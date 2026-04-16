import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ComboboxButtonProps = React.ComponentProps<typeof Button>;

export function ComboboxButton({ className, ...props }: ComboboxButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        'disabled:opacity-100', // override visual style
        'disabled:pointer-events-none',
        className
      )}
    />
  );
}
