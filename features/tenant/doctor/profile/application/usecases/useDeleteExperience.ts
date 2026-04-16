import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteExperience } from '../../infrastructure/deleteExperience.Api.repo';

export const useDeleteExperience = () => {
  return useMutation({
    mutationFn: (data: deleteData) => deleteExperience(data),
    onSuccess: () => {
      toast.success('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
