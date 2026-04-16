import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteWard } from '../../infrastructure/deletWardApi.repo';

export const useDeleteWard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteWard(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-Ward'] });
      toast.error('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
