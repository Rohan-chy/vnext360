import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { PencilIcon } from 'lucide-react';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { useDeleteProduct } from '../../application/usecases/useDeleteProduct';
import { Product } from '../../domain/getProduct.schema';
import ProductImageUpload from '../components/ProductImageUpload';
import AddProductBulkImages from '../components/AddProductBulkImage';
import ViewProductDetails from '../components/ViewProductDetails';

export const ProductColumns = (
  handleEdit: (schedule: Product) => void
): ColumnDef<Product>[] => [
  {
    accessorKey: 'image',
    header: '',
    cell: ({ row }) => <ProductImageUpload data={row.original} />,
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'subCategory',
    header: 'Sub Category',
  },
  {
    accessorKey: 'brand',
    header: 'Brand',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'file',
    header: 'File',
    cell: ({ row }) => <AddProductBulkImages data={row.original} />,
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const { mutate: deleteProduct, isPending: deletePending } =
        useDeleteProduct();

      const { productId } = row.original;

      return (
        <div className="space-x-1">
          <ViewProductDetails data={row.original} />
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
            onClick={() => deleteProduct({ id: String(productId) })}
          />
        </div>
      );
    },
  },
];
