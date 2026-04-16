import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { PencilIcon } from 'lucide-react';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { Badge } from '@/components/ui/badge';
import { DoctorOfferFormValues } from '../../domain/doctorOffer.schema';

export const doctorOfferColumns = (
  handleEdit: (offer: DoctorOfferFormValues) => void
): ColumnDef<DoctorOfferFormValues>[] => [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'discountPercent',
    header: 'Discount (%)',
  },
  {
    accessorKey: 'validFrom',
    header: 'Valid From',
    cell: ({ row }) => {
      const date = new Date(row.original.validFrom);
      return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleDateString();
    },
  },
  {
    accessorKey: 'validTo',
    header: 'Valid To',
    cell: ({ row }) => {
      const date = new Date(row.original.validTo);
      return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleDateString();
    },
  },
  {
    accessorKey: 'applicableServices',
    header: 'Services',
    cell: ({ row }) => (row.original.applicableServices || []).join(', '),
  },
  {
    accessorKey: 'isActive',
    header: 'Active',
    cell: ({ row }) =>
      row.original.isActive ? (
        <Badge className="bg-green-100 text-green-700 border border-green-200">
          Yes
        </Badge>
      ) : (
        <Badge className="bg-red-100 text-red-700 border border-red-200">
          No
        </Badge>
      ),
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const { id } = row.original as any;

      return (
        <div className="space-x-1">
          <Button
            variant="default"
            size="icon"
            className="h-6"
            onClick={() => handleEdit(row.original)}
          >
            <PencilIcon className="w-3 h-3" />
          </Button>

          {id && (
            <DeleteAlert
              // You can pass props for delete mutation here
              onClick={() => alert('delete')}
            />
          )}
        </div>
      );
    },
  },
];
