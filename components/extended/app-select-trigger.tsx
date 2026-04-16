'use client';

import * as React from 'react';
import { SelectTrigger } from '@/components/ui/select';
import { cn } from '@/lib/utils';

type AppSelectTriggerProps = React.ComponentProps<typeof SelectTrigger> & {
  chevronClassName?: string;
};

export function AppSelectTrigger({
  className,
  chevronClassName,
  children,
  ...props
}: AppSelectTriggerProps) {
  return (
    <SelectTrigger
      className={cn(
        // override placeholder color safely
        'data-placeholder:text-white',

        // override default icon color
        '[&_svg:not([class*="text-"])]:text-white',

        className
      )}
      {...props}
    >
      {children}

      {/* chevron styling via slot override */}
      <span
        className={cn(
          'flex items-center transition-transform duration-200',
          chevronClassName
        )}
      />
    </SelectTrigger>
  );
}
