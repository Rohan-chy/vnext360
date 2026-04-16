import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteClinic } from '../../infrastructure/deleteClinicApi.repo';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useDeleteClinic = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteClinic(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-clinics'] });
      toast.error('Clinic Deleted Successfully');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
