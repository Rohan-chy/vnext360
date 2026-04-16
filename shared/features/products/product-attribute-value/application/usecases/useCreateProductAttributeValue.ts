import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CreateProductAttributeValueFormValues } from '../../domain/createProductAttributeValue.schema';
import { createProductAttributeValue } from '../../infrastructure/createProductAttributeValueApi.repo';

export const useCreateProductAttributeValue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProductAttributeValueFormValues) =>
      createProductAttributeValue(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-product-attribute-value'],
      });
      toast.success('Data Added successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
