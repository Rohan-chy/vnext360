'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  VisibilityState,
  getPaginationRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import TableExportButtons from './table-export-buttons';
import DataTablePagination from './data-table-pagination';
import DataTableGoToPage from './data-table-goToPage';
import DataTableExpandedRow from './data-table-expandedRow';
import DataTableColumnVisibility from './data-table-columnVisibility';
import DataTableSearch from './data-table-search';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [expanded, setExpanded] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 15,
  });

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnVisibility, pagination, expanded, globalFilter },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    onExpandedChange: setExpanded,
    onGlobalFilterChange: setGlobalFilter,

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  const totalPages = table.getPageCount();

  return (
    <div className="space-y-4">
      {/* Table Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
        <div className="flex gap-2 items-center">
          <span className="text-[var(--foreground)]">Show</span>
          <Select
            value={
              table.getState().pagination.pageSize === data.length
                ? 'all'
                : String(table.getState().pagination.pageSize)
            }
            onValueChange={(value) => {
              table.setPageSize(value === 'all' ? data.length : Number(value));
            }}
          >
            <SelectTrigger className="border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 15, 20, 25, 50, 75, 100].map((size) => (
                <SelectItem key={size} value={String(size)}>
                  {size}
                </SelectItem>
              ))}
              <SelectItem value="all">All</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-[var(--foreground)]">entries</span>
        </div>

        <div className="col-span-3 flex flex-wrap items-center gap-2 ">
          <TableExportButtons table={table} />
          <DataTableColumnVisibility table={table} />
          <DataTableSearch table={table} />
        </div>
      </div>

      {/* Table */}
      <div className="max-h-96 lg:max-h-[28rem] xl:max-h-[47rem] overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[var(--primary)]">
        <Table
          id="data-table"
          className="mt-1 border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)]"
        >
          <TableHeader className="bg-[var(--muted)]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                <TableHead />
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow className="hover:bg-[var(--hover)] transition-colors">
                    <TableCell>
                      <Button
                        className="w-6 h-6 rounded-full bg-[var(--primary)] text-white font-bold"
                        onClick={() => row.toggleExpanded()}
                        aria-expanded={row.getIsExpanded()}
                      >
                        {row.getIsExpanded() ? '-' : '+'}
                      </Button>
                    </TableCell>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>

                  {row.getIsExpanded() && (
                    <DataTableExpandedRow
                      row={row}
                      columnsLength={columns.length}
                    />
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + 1}
                  className="text-center text-[var(--muted-foreground)]"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <DataTableGoToPage table={table} totalPages={totalPages} />
        <DataTablePagination table={table} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default DataTable;
