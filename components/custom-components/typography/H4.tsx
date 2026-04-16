// Minor Section Heading
// Smaller headings under H3.
// Small grouped content
// Sidebar headings
// Card subtitles,Lists inside sections
import { cn } from '@/lib/utils';

type H4Props = {
  children: React.ReactNode;
  className?: string;
};

export function H4({ children, className }: H4Props) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h4>
  );
}
