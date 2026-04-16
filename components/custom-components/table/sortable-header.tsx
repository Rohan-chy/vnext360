'use client';

import { Column } from '@tanstack/react-table';
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpWideNarrow,
} from 'lucide-react';
import React from 'react';

interface SortableHeaderProps {
  column: Column<any, any>;
  title: string;
}

const SortableHeader: React.FC<SortableHeaderProps> = ({ column, title }) => {
  const isSorted = column.getIsSorted(); //'asc' | 'desc' | false
  return (
    <button
      className="flex items-center cursor-pointer"
      onClick={() => column.toggleSorting()}
    >
      {title}
      <span className="sort-icon">
        {isSorted === 'asc' && <ArrowUpWideNarrow className="ml-2 h-4 w-4" />}
        {isSorted === 'desc' && (
          <ArrowDownWideNarrow className="ml-2 h-4 w-4" />
        )}
        {!isSorted && <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />}
      </span>
    </button>
  );
};

export default SortableHeader;
