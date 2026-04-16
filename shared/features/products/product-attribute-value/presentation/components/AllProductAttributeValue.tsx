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
import { ProductAttributeValueColumns } from '../columns/ProductAttributeValueColumns';
import CreateProductAttributeValueForm from './CreateProductAttributeValueForm';
import { useAllAttributeValueHandler } from '../hooks/useAllAttributeValueHandler';

const AllProductAttributeValue = () => {
  const {
    productAttributeValue,
    open,
    setOpen,
    editingProductAttributeValue,
    handleEdit,
    handleAdd,
  } = useAllAttributeValueHandler();
  return (
    <>
      <DatalistHeader title="Product Attribute Value" handleAdd={handleAdd} />

      <DataTable
        columns={ProductAttributeValueColumns(handleEdit)}
        data={productAttributeValue || []}
      />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingProductAttributeValue
                ? 'Edit Product Attribute Value'
                : 'Product Attribute Value'}
            </DialogTitle>
            <DialogDescription>
              {editingProductAttributeValue
                ? 'Update Product Attribute Value details'
                : 'Enter Product Attribute Value details to create an account'}
            </DialogDescription>
          </DialogHeader>

          <CreateProductAttributeValueForm
            initialValues={editingProductAttributeValue || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllProductAttributeValue;
