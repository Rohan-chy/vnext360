import { deleteData } from '@/types/delete';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteProduct } from '../../infrastructure/deleteProductApi.repo';

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteProduct(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-product'] });
      toast.error('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
