import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteProductBulkImage } from '../../infrastructure/deleteProductBulkImageApi.repo';

export const useDeleteProductBulkImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteProductBulkImage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-productById'] });
      toast.error('Image Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
