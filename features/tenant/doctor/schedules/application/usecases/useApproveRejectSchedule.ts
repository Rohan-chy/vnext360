import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { approveRejectSchedule } from '../../infrastructure/approveRejectScheduleApi.repo';
import { ApproveRejectFormValues } from '../../domain/approveReject.schema';

export const useApproveRejectSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ApproveRejectFormValues) => approveRejectSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-DoctorIncomingSchedule'],
      });
      toast.success('Doctor schedule updated successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
