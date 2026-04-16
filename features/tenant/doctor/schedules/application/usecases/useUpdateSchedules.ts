import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { DoctorScheduleFormData } from '../../domain/schedules.schema';
import { updateDoctorSchedule } from '../../infrastructure/updateSchedulesApi.repo';

export const useUpdateDoctorSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DoctorScheduleFormData) => updateDoctorSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-DoctorOutgoingSchedule'],
      });
      queryClient.invalidateQueries({
        queryKey: ['get-DoctorIncomingSchedule'],
      });
      toast.success('Data updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
