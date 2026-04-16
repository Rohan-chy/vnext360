import { cn } from '@/lib/utils';

type H6Props = {
  children: React.ReactNode;
  className?: string;
};

export function H6({ children, className }: H6Props) {
  return (
    <h6
      className={cn(
        'scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h6>
  );
}
