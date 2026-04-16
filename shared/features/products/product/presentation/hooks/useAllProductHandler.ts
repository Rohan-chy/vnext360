import { useState } from 'react';
import { useGetOwnProduct } from '../../application/usecases/useGetOwnProduct';
import { Product } from '../../domain/getProduct.schema';

export const useAllProductHandler = () => {
  const { data } = useGetOwnProduct();
  const Product = data?.data;

  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleEdit = (ProductAttribute: Product) => {
    setEditingProduct(ProductAttribute);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingProduct(null); // reset form for adding
    setOpen(true);
  };

  return {
    Product,
    open,
    setOpen,
    editingProduct,
    handleEdit,
    handleAdd,
  };
};
