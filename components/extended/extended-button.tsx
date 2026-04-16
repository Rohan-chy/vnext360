import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

type CustomButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  'variant'
> & {
  variant?: React.ComponentProps<typeof Button>['variant'];
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
};

export function CustomButton({
  className,
  variant = 'default',
  icon,
  iconPosition = 'left',
  children,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      className={cn('flex items-center gap-2', className)}
      variant={variant}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </Button>
  );
}
