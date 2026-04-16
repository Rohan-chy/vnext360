import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CreateProductCategoryFormValues } from '../../domain/createProductCategory.schema';
import { putProductCategory } from '../../infrastructure/putProductCategoryApi.repo';

export const usePutProductCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProductCategoryFormValues) =>
      putProductCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-ProductCategory'] });
      toast.success(' Data Updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
