import { ColumnDef } from '@tanstack/react-table';
import { Purchase } from '../../domain/purchase.schema';
import { Badge } from '@/components/ui/badge';
import { CustomButton } from '@/components/extended/extended-button';
import { EyeIcon, DownloadIcon } from 'lucide-react';

const statusColorMap: Record<Purchase['status'], string> = {
  Delivered: 'bg-green-600',
  Processing: 'bg-blue-600',
  Canceled: 'bg-red-600',
};

export const purchaseColumns = (
  handleView: (purchase: Purchase) => void
): ColumnDef<Purchase>[] => [
  {
    accessorKey: 'orderId',
    header: 'Order ID',
  },

  {
    accessorKey: 'medicineName',
    header: 'Medicine',
  },

  {
    accessorKey: 'pharmacyName',
    header: 'Pharmacy',
  },

  {
    accessorKey: 'quantity',
    header: 'Qty',
  },

  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => {
      const price = row.original.price;
      return <span className="font-medium">${price.toFixed(2)}</span>;
    },
  },

  {
    accessorKey: 'purchaseDate',
    header: 'Purchase Date',
    cell: ({ row }) => new Date(row.original.purchaseDate).toLocaleDateString(),
  },

  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;

      return <Badge className={statusColorMap[status]}>{status}</Badge>;
    },
  },

  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const purchase = row.original;

      return (
        <div className="flex items-center gap-1">
          <CustomButton
            size="icon"
            className="h-6"
            onClick={() => handleView(purchase)}
          >
            <EyeIcon className="w-3 h-3" />
          </CustomButton>

          <CustomButton size="icon" variant="secondary" className="h-6">
            <DownloadIcon className="w-3 h-3" />
          </CustomButton>
        </div>
      );
    },
  },
];
