import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CreateProductAttributeValueFormValues } from '../../domain/createProductAttributeValue.schema';
import { putProductAttributeValue } from '../../infrastructure/putProductAttributeValueApi.repo';

export const usePutProductAttributeValue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProductAttributeValueFormValues) =>
      putProductAttributeValue(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-product-attribute-value'],
      });
      toast.success(' Data Updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
