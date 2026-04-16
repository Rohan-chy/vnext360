import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deletePage } from '../../infrastructure/deletePageApi.repo';
import { deleteData } from '@/types/delete';

export const useDeletePage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deletePage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-page'] });
      toast.error('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
