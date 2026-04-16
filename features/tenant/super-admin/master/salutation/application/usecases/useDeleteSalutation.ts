import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteSalutation } from '../../infrastructure/deleteSalutationApi.repo';
import { deleteData } from '@/types/delete';

export const useDeleteSalutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteSalutation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-salutation'] });
      toast.error('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
