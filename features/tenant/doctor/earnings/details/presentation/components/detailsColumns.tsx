import { ColumnDef } from '@tanstack/react-table';
import { EarningsDetail } from '../../application/utils/earningsDetailsData';

export const detailsColumns: ColumnDef<EarningsDetail>[] = [
  {
    header: 'SN',
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'patient',
    header: 'Patient',
  },
  {
    accessorKey: 'items',
    header: 'Items',
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
    accessorKey: 'charge',
    header: 'Charge',
    cell: ({ row }) => <span>${row.original.charge}</span>,
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
