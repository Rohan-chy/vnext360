import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { PencilIcon } from 'lucide-react';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { useDeleteProductAttribute } from '../../application/usecases/useDeleteProductAttribute';
import { productAttributeItem } from '../../domain/getProductAttribute.schema';

export const ProductAttributeColumns = (
  handleEdit: (schedule: productAttributeItem) => void
): ColumnDef<productAttributeItem>[] => [
  {
    accessorKey: 'name',
    header: 'Product Attribute',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const { mutate: deleteProductAttribute, isPending: deletePending } =
        useDeleteProductAttribute();

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
            onClick={() => deleteProductAttribute({ id: String(id) })}
          />
        </div>
      );
    },
  },
];
