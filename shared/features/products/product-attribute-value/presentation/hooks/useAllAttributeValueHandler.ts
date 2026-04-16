import { useState } from 'react';
import { useGetProductAttributeValue } from '../../application/usecases/useGetProductAttributeValue';
import { ProductAttributeValue } from '../../domain/getProductAttributeValue.schema';

export const useAllAttributeValueHandler = () => {
  const { data } = useGetProductAttributeValue();
  const productAttributeValue = data?.data;

  const [open, setOpen] = useState(false);
  const [editingProductAttributeValue, setEditingProductAttributeValue] =
    useState<ProductAttributeValue | null>(null);

  const handleEdit = (ProductAttribute: ProductAttributeValue) => {
    setEditingProductAttributeValue(ProductAttribute);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingProductAttributeValue(null); // reset form for adding
    setOpen(true);
  };

  return {
    productAttributeValue,
    open,
    setOpen,
    editingProductAttributeValue,
    handleEdit,
    handleAdd,
  };
};
