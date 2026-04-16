import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteDistrict } from '../../infrastructure/deleteDistrictApi.repo';

export const useDeleteDistrict = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteDistrict(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-District'] });
      toast.error('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
