import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeleteClinicAllocation } from '../../domain/deleteClinicAllocation.schema';
import { toast } from 'sonner';
import { deleteClinicAllocation } from '../../infrastructure/deleteClinicAllocationApi.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';

export const useDeleteClinicAllocation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: DeleteClinicAllocation) => deleteClinicAllocation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-clinic-allocationToDoctors'],
      });
      queryClient.invalidateQueries({
        queryKey: ['get-clinic-allocationFromDoctors'],
      });
      toast.success(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
