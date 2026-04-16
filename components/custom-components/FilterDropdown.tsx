'use client';

import * as React from 'react';
import { Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type FilterOption = {
  label: string;
  value: string;
};

type FilterDropdownProps = {
  options: FilterOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export function FilterDropdown({
  options,
  value,
  onChange,
  className,
}: FilterDropdownProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={cn('gap-2', className)}>
          <Filter size={16} />
          Filter
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-48 p-2">
        <div className="flex flex-col gap-1">
          {options.map((option) => {
            const isActive = value === option.value;

            return (
              <button
                key={option.value}
                onClick={() => onChange?.(option.value)}
                className={cn(
                  'text-left px-3 py-2 rounded-md text-sm transition',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
