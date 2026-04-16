'use client';

import React from 'react';
import { TableRow, TableCell } from '@/components/ui/table';

interface DataTableExpandedRowProps {
  row: any;
  columnsLength: number;
}

const DataTableExpandedRow: React.FC<DataTableExpandedRowProps> = ({
  row,
  columnsLength,
}) => {
  return (
    <TableRow>
      <TableCell colSpan={columnsLength + 1} className="p-4">
        <div className="flex flex-col gap-2">
          {row.getVisibleCells().map((cell: any) => {
            return (
              <div
                key={cell.id}
                className={`flex items-center uppercase gap-2 border-b last:border-b-0`}
              >
                <strong>{cell.column.id} :</strong>
                {cell.getValue() as React.ReactNode}
              </div>
            );
          })}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default DataTableExpandedRow;
