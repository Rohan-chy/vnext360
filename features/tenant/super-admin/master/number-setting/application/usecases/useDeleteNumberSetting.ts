import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteNumberSetting } from '../../infrastructure/deleteNumberSettingApi.repo';

export const useDeleteNumberSetting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteNumberSetting(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-NumberSettings'] });
      toast.error('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
