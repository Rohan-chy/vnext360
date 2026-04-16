'use client';
import DataTable from '@/components/custom-components/table/data-table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import DatalistHeader from '@/components/custom-components/data-list-header';
import { ProductColumns } from '../columns/ProductColumns';
import CreateProductForm from './CreateProductForm';
import { useAllProductHandler } from '../hooks/useAllProductHandler';
import CreateProductFormNew from './CreateProductFormNew';
import { CustomButton } from '@/components/extended/extended-button';
import { ArrowLeft } from 'lucide-react';
import { H4 } from '@/components/custom-components/typography/H4';

const AllProduct = () => {
  const { Product, open, setOpen, editingProduct, handleEdit, handleAdd } =
    useAllProductHandler();

  return (
    <>
      <header className="my-2 flex justify-between items-start">
        <div className="flex gap-2">
          {open && (
            <CustomButton
              size="sm"
              variant="outline"
              icon={<ArrowLeft />}
              onClick={() => setOpen(false)}
            ></CustomButton>
          )}

          <div>
            <H4 className="text-primary">Products</H4>
            {/* <p className="text-sm text-muted-foreground mt-1">{description}</p> */}
          </div>
        </div>

        <CustomButton size="sm" onClick={handleAdd} className="font-semibold">
          Add Product
        </CustomButton>
      </header>
      {open ? (
        <CreateProductFormNew
          key={editingProduct?.productId ?? 'create'}
          initialValues={editingProduct || undefined}
          onClose={() => setOpen(false)}
        />
      ) : (
        <DataTable columns={ProductColumns(handleEdit)} data={Product || []} />
      )}

      {/* Dialog controlled from parent */}
      {/* <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingProduct ? 'Edit Product' : 'Product'}
            </DialogTitle>
            <DialogDescription>
              {editingProduct
                ? 'Update Product details'
                : 'Enter Product details to create an account'}
            </DialogDescription>
          </DialogHeader>

          <CreateProductForm
            key={editingProduct?.productId ?? 'create'}
            initialValues={editingProduct || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog> */}
    </>
  );
};

export default AllProduct;
