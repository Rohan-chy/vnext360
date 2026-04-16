import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CreateProductAttributeFormValues } from '../../domain/createProductAttribute.schema';
import { putProductAttribute } from '../../infrastructure/putProductAttributeApi.repo';

export const usePutProductAttribute = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProductAttributeFormValues) =>
      putProductAttribute(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-product-attribute'] });
      toast.success(' Data Updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
