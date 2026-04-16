import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteCertification } from '../../infrastructure/deleteCertificationApi.repo';

export const useDeleteCertification = () => {
  return useMutation({
    mutationFn: (data: deleteData) => deleteCertification(data),
    onSuccess: () => {
      toast.success('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
