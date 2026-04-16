// Use it for secondary or less important text.
import { cn } from '@/lib/utils';

type MutedProps = {
  children: React.ReactNode;
  className?: string;
};

export function Muted({ children, className }: MutedProps) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
  );
}
