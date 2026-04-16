import { deleteData } from '@/types/delete';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteProductCategory } from '../../infrastructure/deleteProductCategoryApi.repo';

export const useDeleteProductCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteProductCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-ProductCategory'] });
      toast.error('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
