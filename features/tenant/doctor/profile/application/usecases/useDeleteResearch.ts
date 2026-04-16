import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteResearch } from '../../infrastructure/deletResearchApi.repo';

export const useDeleteResearch = () => {
  return useMutation({
    mutationFn: (data: deleteData) => deleteResearch(data),
    onSuccess: () => {
      toast.success('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
