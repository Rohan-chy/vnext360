import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteNominee } from '../../infrastructure/deleteNomineeApi.repo';

export const useDeleteNominee = () => {
  return useMutation({
    mutationFn: (data: deleteData) => deleteNominee(data),
    onSuccess: () => {
      toast.success('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
