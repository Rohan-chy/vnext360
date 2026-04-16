import { cn } from '@/lib/utils';

type H5Props = {
  children: React.ReactNode;
  className?: string;
};

export function H5({ children, className }: H5Props) {
  return (
    <h5
      className={cn(
        'scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h5>
  );
}
