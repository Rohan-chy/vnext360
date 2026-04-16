// Use it for normal body text.
import { cn } from '@/lib/utils';

// Hierarchy in paragraph text, the bulk of content. Variants:

// Variant	Role / Usage	Typical Font Size
// Large	Prominent text, hero sections	18–20px
// Lead	Introductory paragraph, slightly larger	16–18px
// Base	Default paragraph	14–16px
// Small	Secondary text, footnotes	12–14px
// XSmall / Caption	Image captions, disclaimers, meta info	10–12px
// Overline / Micro	UI labels, overlines, timestamp, legal text	8–10px
// H1
// H2
// H3
// H4
// H5
// H6
// Large (Paragraph)
// Lead (Paragraph)
// Base / Normal (Paragraph)
// Small (Paragraph)
// XSmall / Caption
// Overline / Micro

type PProps = {
  children: React.ReactNode;
  className?: string;
};

export function P({ children, className }: PProps) {
  return <p className={cn('leading-7', className)}>{children}</p>;
}
