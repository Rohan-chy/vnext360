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
import CreateProductAttributeForm from './CreateProductAttributeForm';
import { ProductAttributeColumns } from '../columns/clinicAllocationColumns';
import { useAllProductAttributeHandler } from '../hooks/useAllProductAttributeHandler';

const AllProductAttribute = () => {
  const {
    productAttribute,
    open,
    setOpen,
    editingProductAttribute,
    handleEdit,
    handleAdd,
  } = useAllProductAttributeHandler();

  return (
    <>
      <DatalistHeader title="Product Attribute" handleAdd={handleAdd} />

      <DataTable
        columns={ProductAttributeColumns(handleEdit)}
        data={productAttribute || []}
      />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingProductAttribute
                ? 'Edit Product Attribute'
                : 'Product Attribute'}
            </DialogTitle>
            <DialogDescription>
              {editingProductAttribute
                ? 'Update Product Attribute details'
                : 'Enter Product Attribute details to create an account'}
            </DialogDescription>
          </DialogHeader>

          <CreateProductAttributeForm
            initialValues={editingProductAttribute || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllProductAttribute;
