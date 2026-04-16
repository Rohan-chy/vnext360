import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { PencilIcon } from 'lucide-react';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { useDeleteProductAttributeValue } from '../../application/usecases/useDeleteProductAttributeValue';
import { ProductAttributeValue } from '../../domain/getProductAttributeValue.schema';

export const ProductAttributeValueColumns = (
  handleEdit: (schedule: ProductAttributeValue) => void
): ColumnDef<ProductAttributeValue>[] => [
  {
    accessorKey: 'productAttributeName',
    header: 'Attribute',
  },
  {
    accessorKey: 'value',
    header: 'Value',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const { mutate: deleteProductAttributeValue, isPending: deletePending } =
        useDeleteProductAttributeValue();

      const { id } = row.original;

      return (
        <div className="flex space-x-1">
          <Button
            variant="outline"
            size="icon"
            className="h-6"
            onClick={() => handleEdit(row.original)}
          >
            <PencilIcon className="w-3 h-3" />
          </Button>

          <DeleteAlert
            disabled={deletePending}
            loading={deletePending}
            onClick={() => deleteProductAttributeValue({ id: String(id) })}
          />
        </div>
      );
    },
  },
];
