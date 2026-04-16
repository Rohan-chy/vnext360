import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteBankDetails } from '../../infrastructure/deleteBankDetailsApi.repo';

export const useDeleteBankDetails = () => {
  return useMutation({
    mutationFn: (data: deleteData) => deleteBankDetails(data),
    onSuccess: () => {
      toast.success('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
