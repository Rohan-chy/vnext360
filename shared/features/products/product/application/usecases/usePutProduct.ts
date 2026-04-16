import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CreateProductFormValues } from '../../domain/createProduct.schema';
import { putProduct } from '../../infrastructure/putProductApi.repo';

export const usePutProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProductFormValues) => putProduct(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-product'] });
      toast.success(' Data Updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
