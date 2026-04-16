'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

interface DataTablePaginationProps {
  table: any;
  totalPages: number;
}

const getPaginationRange = (currentPage: number, totalPages: number) => {
  let delta = 2; //how many pages before/after/current
  let range: number[] = [];
  const rangeWithDots: (number | string)[] = [];
  let l: number | undefined;

  for (let i = 1; i <= totalPages; i++) {
    // page numbers that should appear directly in the pagination bar, without being replaced by "...".
    // first page || last page || Within a few pages of the current page
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      range.push(i);
    }
  }
  for (let i of range) {
    if (l !== undefined) {
      // Only one page is missing
      // Show that page number directly
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      }
      // More than one page missing
      // Show "..."
      else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }
  return rangeWithDots;
};

const DataTablePagination: React.FC<DataTablePaginationProps> = ({
  table,
  totalPages,
}) => {
  const handlePageClick = (page: number) => {
    table.setPageIndex(page - 1);
  };
  return (
    <div className="flex items-center justify-end gap-1">
      <Button
        variant="outline"
        size={'sm'}
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
      >
        Previous
      </Button>
      {getPaginationRange(
        table.getState().pagination.pageIndex + 1,
        totalPages
      ).map((page, idx) =>
        typeof page === 'string' ? (
          <span key={idx}>...</span>
        ) : (
          <Button
            key={`page-${page}`}
            size={'sm'}
            variant={
              table.getState().pagination.pageIndex + 1 === page
                ? 'default' //  current page gets solid/default variant
                : 'outline' // other pages are outlined
            }
            onClick={() => handlePageClick(page)}
            className={`px-3 py-1 border rounded-lg`}
          >
            {page}
          </Button>
        )
      )}
      <Button
        variant="outline"
        size={'sm'}
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
      >
        Next
      </Button>
    </div>
  );
};

export default DataTablePagination;
