'use client';

import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface ExportButtonProps {
  onClick: () => void;
  icon: ReactNode;
  label: string;
  className?: string;
}

const ExportButton = ({
  onClick,
  icon,
  label,
  className,
}: ExportButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className={`bg-gray-100 rounded-none border-2 flex gap-1 items-center ${className || ''}`}
    >
      {icon}
      {label}
    </Button>
  );
};

export default ExportButton;
