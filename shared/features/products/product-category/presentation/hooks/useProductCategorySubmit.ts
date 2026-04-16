import { useCreateProductCategory } from '../../application/usecases/useCreateProductCategory';
import { usePutProductCategory } from '../../application/usecases/usePutProductCategory';
import { CreateProductCategoryFormValues } from '../../domain/createProductCategory.schema';

export const useProductCategorySubmit = (onClose: any) => {
  const { mutate: createProductCategoryAttribute, isPending: createPending } =
    useCreateProductCategory();
  const { mutate: putProductCategoryAttribute, isPending: patchPending } =
    usePutProductCategory();

  const onSubmit = (values: CreateProductCategoryFormValues) => {
    if (values.id) {
      // If ID exists, it's an update
      putProductCategoryAttribute(values, {
        onSuccess: () => onClose?.(),
      });
    } else {
      // If no ID, it's a create
      createProductCategoryAttribute(values, {
        onSuccess: () => onClose?.(),
      });
    }
  };

  return {
    onSubmit,
    loading: createPending || patchPending,
  };
};
