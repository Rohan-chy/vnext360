import { useCreateProduct } from '../../application/usecases/useCreateProduct';
import { usePutProduct } from '../../application/usecases/usePutProduct';
import { CreateProductFormValues } from '../../domain/createProduct.schema';

export const useProductSubmit = (onClose?: any) => {
  const { mutate: createProduct, isPending: createPending } =
    useCreateProduct();
  const { mutate: putProduct, isPending: patchPending } = usePutProduct();

  const onSubmit = (values: CreateProductFormValues) => {
    if (values.id) {
      // If ID exists, it's an update
      putProduct(values, {
        onSuccess: () => onClose?.(),
      });
    } else {
      // If no ID, it's a create
      createProduct(values, {
        onSuccess: () => onClose?.(),
      });
    }
  };

  return {
    onSubmit,
    loading: createPending || patchPending,
  };
};
