import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateClinicAllocationFormValues } from '../../domain/createClinicAllocation.schema';
import { toast } from 'sonner';
import { putClinicAllocation } from '../../infrastructure/putClinicAllocation.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';

export const usePutClinicAllocation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateClinicAllocationFormValues) =>
      putClinicAllocation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-clinic-allocationToDoctors'],
      });
      queryClient.invalidateQueries({
        queryKey: ['get-clinic-allocationFromDoctors'],
      });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
