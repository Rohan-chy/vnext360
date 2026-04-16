// Titles , Heading of the page
// H1  Page Title
//  └─ H2 Section
//  └─ H3 Subsection
//  └─ H4 Small subsection
import { cn } from '@/lib/utils';

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: H1Props) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
        className
      )}
    >
      {children}
    </h1>
  );
}
