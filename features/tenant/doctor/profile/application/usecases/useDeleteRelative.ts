import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteRelative } from '../../infrastructure/deleteRelativeApi.repo';

export const useDeleteRelative = () => {
  return useMutation({
    mutationFn: (data: deleteData) => deleteRelative(data),
    onSuccess: () => {
      toast.success('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
