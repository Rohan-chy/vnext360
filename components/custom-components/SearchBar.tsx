import * as React from 'react';
import { Search, X } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { IconButton } from './IconButton';

type SearchBarProps = {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export function SearchBar({
  value = '',
  onChange,
  onSearch,
  placeholder = 'Search...',
  className,
}: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const clearSearch = () => {
    onChange?.('');
  };

  return (
    <div className={cn('flex items-center gap-2 w-full max-w-md', className)}>
      <div className="relative w-full">
        <Input
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="pr-10"
        />

        {value && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <IconButton
        icon={<Search />}
        aria-label="Search"
        onClick={() => onSearch?.(value)}
      />
    </div>
  );
}
