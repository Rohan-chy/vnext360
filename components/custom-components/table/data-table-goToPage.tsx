'use client';

import { Table } from '@tanstack/react-table';
import React from 'react';

interface DataTableGoToPageProps<TData> {
  table: Table<TData>;
  totalPages: number;
}

const DataTableGoToPage = <TData,>({
  table,
  totalPages,
}: DataTableGoToPageProps<TData>) => {
  // const [pageInput, setPageInput] = React.useState(
  //   String(table.getState().pagination.pageIndex + 1)
  // );
  const currentPage = table.getState().pagination.pageIndex + 1;
  const [pageInput, setPageInput] = React.useState(
    String(Math.max(1, currentPage))
  );
  const handleCommit = () => {
    let page = parseInt(pageInput, 10);
    if (isNaN(page) || page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }
    // react table expects 0 based
    table.setPageIndex(page - 1);
    // keep ui in sync
    setPageInput(String(page));
  };
  //   sync input with table state when pageindex changes externally
  // React.useEffect(() => {
  //   setPageInput(String(table.getState().pagination.pageIndex + 1));
  // }, [table.getState().pagination.pageIndex]);
  // sync input with table state when pageIndex changes externally
  React.useEffect(() => {
    setPageInput(String(Math.max(1, currentPage)));
  }, [currentPage]);

  // Debounce input changes
  // React.useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     handleCommit();
  //   }, 500); //wait 500ms after user stops typing
  //   // clearing on next key stroke
  //   return () => clearTimeout(timeout);
  // }, [pageInput]);
  // Debounce input changes but skip if no change or empty
  React.useEffect(() => {
    const currentStr = String(Math.max(1, currentPage));
    if (pageInput === '' || pageInput === currentStr) return;
    const timeout = setTimeout(() => {
      handleCommit();
    }, 500);
    return () => clearTimeout(timeout);
  }, [pageInput, currentPage]);
  return (
    <div className="flex items-center gap-2">
      <span>Go to page:</span>
      <input
        min={1}
        max={totalPages}
        value={pageInput}
        // onChange={(e) => setPageInput(e.target.value)}
        onChange={(e) => {
          // only digits to avoid parsing issues
          setPageInput(e.target.value.replace(/[^0-9]/g, ''));
        }}
        onBlur={handleCommit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleCommit();
          }
        }}
        className="w-12 px-3 border border-black  rounded"
      />
      <span>of {totalPages}</span>
    </div>
  );
};

export default DataTableGoToPage;
