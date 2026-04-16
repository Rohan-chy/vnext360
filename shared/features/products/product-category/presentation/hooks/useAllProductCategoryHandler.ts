import { useState } from 'react';
import { useGetProductCategory } from '../../application/usecases/useGetProductCategory';
import { CreateProductCategoryFormValues } from '../../domain/createProductCategory.schema';

export const useAllProductCategoryHandler = () => {
  const { data } = useGetProductCategory();
  const ProductCategory = data?.data;

  const [open, setOpen] = useState(false);
  const [editingProductCategory, setEditingProductCategory] =
    useState<CreateProductCategoryFormValues | null>(null);

  const handleEdit = (
    ProductCategoryAttribute: CreateProductCategoryFormValues
  ) => {
    setEditingProductCategory(ProductCategoryAttribute);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingProductCategory(null); // reset form for adding
    setOpen(true);
  };

  return {
    ProductCategory,
    open,
    setOpen,
    editingProductCategory,
    handleEdit,
    handleAdd,
  };
};
