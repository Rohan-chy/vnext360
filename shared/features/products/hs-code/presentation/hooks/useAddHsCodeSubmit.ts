import { useGetOwnProduct } from '../../../product/application/usecases/useGetOwnProduct';
import { useAddHsCode } from '../../application/usecases/useAddHsCode';
import { useUpdateHsCode } from '../../application/usecases/useUpdateHsCode';
import { hsCodeFormValues } from '../../domain/forms/useCreateHsCodeForm';

export const useAddHsCodeSubmit = (onClose?: () => void) => {
  const { data: products } = useGetOwnProduct();
  const productData = products?.data;

  //add
  const { mutateAsync: addHscode, isPending: createPending } = useAddHsCode();

  //update
  const { mutateAsync: updateHscode, isPending: updatePending } =
    useUpdateHsCode();

  const onSubmit = (values: hsCodeFormValues) => {
    if (values.id) {
      // If ID exists, it's an update
      updateHscode(values, {
        onSuccess: () => onClose?.(),
      });
    } else {
      // If no ID, it's a create
      addHscode(values, {
        onSuccess: () => onClose?.(),
      });
    }
  };

  return {
    onSubmit,
    loading: createPending || updatePending,
    productData,
  };
};
