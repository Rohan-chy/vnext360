import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteState } from '../../infrastructure/deleteStateApi.repo';

export const useDeleteState = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteState(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-State'] });
      toast.error('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
