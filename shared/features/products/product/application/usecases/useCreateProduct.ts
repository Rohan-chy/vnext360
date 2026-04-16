import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CreateProductFormValues } from '../../domain/createProduct.schema';
import { createProduct } from '../../infrastructure/createProductApi.repo';

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProductFormValues) => createProduct(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-product'] });
      toast.success('Data Added successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
