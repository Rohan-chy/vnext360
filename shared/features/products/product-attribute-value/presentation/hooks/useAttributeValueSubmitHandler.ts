import { useCreateProductAttributeValue } from '../../application/usecases/useCreateProductAttributeValue';
import { usePutProductAttributeValue } from '../../application/usecases/usePutProductAttributeValue';
import { CreateProductAttributeValueFormValues } from '../../domain/createProductAttributeValue.schema';

export const useAttributeValueSubmitHandler = (onClose: any) => {
  const { mutate: createProductAttribute, isPending: createPending } =
    useCreateProductAttributeValue();

  const { mutate: putProductAttribute, isPending: patchPending } =
    usePutProductAttributeValue();

  const onSubmit = (values: CreateProductAttributeValueFormValues) => {
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
