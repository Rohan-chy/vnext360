import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateClinicAllocationFormValues } from '../../domain/createClinicAllocation.schema';
import { toast } from 'sonner';
import { createClinicAllocation } from '../../infrastructure/createClinicAllocation.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';

export const useCreateClinicAllocation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateClinicAllocationFormValues) =>
      createClinicAllocation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-clinic-allocationToDoctors'],
      });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
