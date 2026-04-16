'use client';

import { receiptsData, Receipt } from '../../application/utils/receiptsData';
import { ColumnDef } from '@tanstack/react-table';
import DataTable from '@/components/custom-components/table/data-table';

export default function Receipts() {
  const columns: ColumnDef<Receipt>[] = [
    {
      id: 'sn',
      header: 'SN',
      cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    {
      accessorKey: 'accountNumber',
      header: 'Account Number',
    },
    {
      accessorKey: 'dateISO',
      header: 'Date',
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
      cell: ({ row }) => <span>${row.original.amount.toFixed(2)}</span>,
    },
    {
      accessorKey: 'remarks',
      header: 'Remarks',
      cell: ({ row }) => <span>{row.original.remarks || '-'}</span>,
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-primary">
        Receipts from VNext
      </h2>
      <DataTable columns={columns} data={receiptsData || []} />
    </>
  );
}
