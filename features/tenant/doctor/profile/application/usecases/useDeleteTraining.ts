import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteTraining } from '../../infrastructure/deleteTrainingApi.repo';

export const useDeleteTraining = () => {
  return useMutation({
    mutationFn: (data: deleteData) => deleteTraining(data),
    onSuccess: () => {
      toast.success('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
