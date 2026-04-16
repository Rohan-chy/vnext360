import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CreateProductCategoryFormValues } from '../../domain/createProductCategory.schema';
import { createProductCategory } from '../../infrastructure/createProductCategoryApi.repo';

export const useCreateProductCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProductCategoryFormValues) =>
      createProductCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-ProductCategory'] });
      toast.success('Data Added successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
