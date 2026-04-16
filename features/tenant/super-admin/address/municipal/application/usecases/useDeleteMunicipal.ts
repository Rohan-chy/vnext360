import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteMunicipal } from '../../infrastructure/deleteMunicipalApi.repo';

export const useDeleteMunicipal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteMunicipal(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-Municipal'] });
      toast.error('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
