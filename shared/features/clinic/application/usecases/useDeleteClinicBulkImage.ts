import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteClinicBulkImage } from '../../infrastructure/deleteClinicBulkImageApi.repo';

export const useDeleteClinicBulkImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteClinicBulkImage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-clinicyId'] });
      toast.error('Image Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
