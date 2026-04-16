import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { approveRejectAllocation } from '../../infrastructure/approveRejectAllocationApi.repo';
import { ApproveRejectAllocationFormValues } from '../../domain/approveRejectAlloction.schema';
import { MESSAGES } from '@/core/messages/messages';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useApproveRejectAllocation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ApproveRejectAllocationFormValues) =>
      approveRejectAllocation(data),
    onSuccess: () => {
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
