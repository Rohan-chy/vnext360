import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { PencilIcon } from 'lucide-react';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { CreateProductCategoryFormValues } from '../../domain/createProductCategory.schema';
import { useDeleteProductCategory } from '../../application/usecases/useDeleteProductCategory';
import { Badge } from '@/components/ui/badge';

export const ProductCategoryColumns = (
  handleEdit: (schedule: CreateProductCategoryFormValues) => void
): ColumnDef<CreateProductCategoryFormValues>[] => [
  {
    accessorKey: 'name',
    header: 'Category',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'categoryName',
    header: 'Parent Category',
  },
  {
    accessorKey: 'isActive',
    header: 'Status',
    cell: ({ row }) => (
      <Badge
        className={
          row.original.isActive
            ? 'bg-green-100 text-green-700 border border-green-200'
            : 'bg-gray-100 text-gray-600 border border-gray-200'
        }
      >
        {row.original.isActive ? 'Active' : 'Inactive'}
      </Badge>
    ),
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const { mutate: deleteProductCategory, isPending: deletePending } =
        useDeleteProductCategory();

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
            onClick={() => deleteProductCategory({ id: String(id) })}
          />
        </div>
      );
    },
  },
];
