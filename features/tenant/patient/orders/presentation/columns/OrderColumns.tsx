import { ColumnDef } from '@tanstack/react-table';
import { Order } from '../../domain/order.schema';
import { CustomButton } from '@/components/extended/extended-button';
import { EyeIcon } from 'lucide-react';

export const OrderColumns = (
  handleView: (order: Order) => void
): ColumnDef<Order>[] => [
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => new Date(row.original.date).toLocaleDateString(),
  },

  {
    accessorKey: 'item',
    header: 'Item',
  },

  {
    accessorKey: 'quantity',
    header: 'Qty',
  },

  {
    accessorKey: 'rate',
    header: 'Rate',
    cell: ({ row }) => {
      const rate = row.original.rate;
      return <span>${rate.toFixed(2)}</span>;
    },
  },

  {
    accessorKey: 'discount',
    header: 'Discount',
    cell: ({ row }) => {
      const discount = row.original.discount;
      return <span>${discount.toFixed(2)}</span>;
    },
  },

  {
    accessorKey: 'taxes',
    header: 'Taxes',
    cell: ({ row }) => {
      const taxes = row.original.taxes;
      return <span>${taxes.toFixed(2)}</span>;
    },
  },

  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => {
      const amount = row.original.amount;
      return <span className="font-semibold">${amount.toFixed(2)}</span>;
    },
  },

  {
    accessorKey: 'supplier',
    header: 'Supplier',
  },

  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const order = row.original;

      return (
        <div className="flex items-center gap-1">
          <CustomButton
            size="icon"
            className="h-6"
            onClick={() => handleView(order)}
          >
            <EyeIcon className="w-3 h-3" />
          </CustomButton>
        </div>
      );
    },
  },
];
