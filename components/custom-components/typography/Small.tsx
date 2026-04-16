// Helper text, captions, form hints.
// <Small>Password must be at least 8 characters.</Small>
import { cn } from '@/lib/utils';

type SmallProps = {
  children: React.ReactNode;
  className?: string;
};

export function Small({ children, className }: SmallProps) {
  return (
    <small className={cn('text-sm font-medium leading-none', className)}>
      {children}
    </small>
  );
}
