import { useState } from 'react';
import { useGetProductAttribute } from '../../application/usecases/useGetProductAttribute';
import { CreateProductAttributeFormValues } from '../../domain/createProductAttribute.schema';
import { productAttributeItem } from '../../domain/getProductAttribute.schema';

export const useAllProductAttributeHandler = () => {
  const { data } = useGetProductAttribute();
  const productAttribute = data?.data;

  const [open, setOpen] = useState(false);
  const [editingProductAttribute, setEditingProductAttribute] =
    useState<productAttributeItem | null>(null);

  const handleEdit = (ProductAttribute: productAttributeItem) => {
    setEditingProductAttribute(ProductAttribute);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingProductAttribute(null); // reset form for adding
    setOpen(true);
  };

  return {
    productAttribute,
    open,
    setOpen,
    editingProductAttribute,
    handleEdit,
    handleAdd,
  };
};
