// Important text that is not a heading (card titles, labels, highlighted info
{
  /* <Large>Total Revenue</Large> */
}
{
  /* <P>$12,430</P> */
}
import { cn } from '@/lib/utils';

type LargeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Large({ children, className }: LargeProps) {
  return (
    <div className={cn('text-lg font-semibold', className)}>{children}</div>
  );
}
