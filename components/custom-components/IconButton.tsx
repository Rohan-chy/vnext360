import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { VariantProps } from 'class-variance-authority';

type IconButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    icon: React.ReactNode;
    'aria-label': string;
  };

export function IconButton({
  icon,
  className,
  variant = 'ghost',
  size = 'icon',
  ...props
}: IconButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn('p-0', className)}
      {...props}
    >
      {icon}
    </Button>
  );
}
