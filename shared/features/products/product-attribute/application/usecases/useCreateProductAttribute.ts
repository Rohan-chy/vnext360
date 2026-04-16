import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CreateProductAttributeFormValues } from '../../domain/createProductAttribute.schema';
import { createProductAttribute } from '../../infrastructure/createProductAttributeApi.repo';

export const useCreateProductAttribute = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProductAttributeFormValues) =>
      createProductAttribute(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-product-attribute'] });
      toast.success('Data Added successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
