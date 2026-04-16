import { ColumnDef } from '@tanstack/react-table';
import { EarningsSummary } from '../../application/utils/earningsSummaryData';

export const summaryColumns: ColumnDef<EarningsSummary>[] = [
  {
    header: 'SN',
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: 'category',
    header: 'Service Category',
  },
  {
    accessorKey: 'qty',
    header: 'Qty',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => <span>${row.original.amount}</span>,
  },
  {
    accessorKey: 'discount',
    header: 'Discount',
    cell: ({ row }) => <span>${row.original.discount}</span>,
  },
  {
    accessorKey: 'tax',
    header: 'Tax',
    cell: ({ row }) => <span>${row.original.tax}</span>,
  },
  {
    accessorKey: 'charges',
    header: 'Charges',
    cell: ({ row }) => <span>${row.original.charges}</span>,
  },
  {
    accessorKey: 'netAmount',
    header: 'Net Amount',
    cell: ({ row }) => (
      <span className="font-semibold text-green-600">
        ${row.original.netAmount}
      </span>
    ),
  },
];
