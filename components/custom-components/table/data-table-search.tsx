'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Table } from '@tanstack/react-table';
import { useDebounce } from '@/utils/useDebounce';
import { Icons } from '@/shared/icons';

interface DataTableSearchProps<TData> {
  table: Table<TData>;
  placeholder?: string;
  debounce?: number;
  className?: string;
}

const DataTableSearch = <TData,>({
  table,
  placeholder = 'Search...',
  debounce = 300,
  className = '',
}: DataTableSearchProps<TData>) => {
  const [value, setValue] = React.useState(
    (table.getState().globalFilter as string) ?? ''
  );

  // debounced value
  const debouncedValue = useDebounce(value, debounce);

  // update table only when debounced value changes
  React.useEffect(() => {
    table.setGlobalFilter(debouncedValue);
  }, [debouncedValue, table]);

  return (
    <div className={`relative ${className}`}>
      <Icons.Search
        size={16}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="border border-primary pl-8 w-[200px] md:w-[250px]"
      />
    </div>
  );
};

export default DataTableSearch;
