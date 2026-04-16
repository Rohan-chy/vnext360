import { useCreateProductAttribute } from '../../application/usecases/useCreateProductAttribute';
import { usePutProductAttribute } from '../../application/usecases/usePutProductAttribute';
import { CreateProductAttributeFormValues } from '../../domain/createProductAttribute.schema';

export const useProductAttributeSubmit = (onClose: any) => {
  const { mutate: createProductAttribute, isPending: createPending } =
    useCreateProductAttribute();
  const { mutate: putProductAttribute, isPending: patchPending } =
    usePutProductAttribute();

  const onSubmit = (values: CreateProductAttributeFormValues) => {
    if (values.id) {
      // If ID exists, it's an update
      putProductAttribute(values, {
        onSuccess: () => onClose?.(),
      });
    } else {
      // If no ID, it's a create
      createProductAttribute(values, {
        onSuccess: () => onClose?.(),
      });
    }
  };

  return {
    onSubmit,
    loading: createPending || patchPending,
  };
};
