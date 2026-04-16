import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function FocusRingInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      className={cn(
        'focus-visible:ring-1 focus-visible:ring-blue-400 focus-visible:border-blue-500',
        className
      )}
      {...props}
    />
  );
}
