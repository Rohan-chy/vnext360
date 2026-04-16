import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { DoctorScheduleFormData } from '../../domain/schedules.schema';
import { createDoctorSchedule } from '../../infrastructure/createSchedulesApi.repo';

export const useCreateDoctorSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DoctorScheduleFormData) => createDoctorSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-DoctorOutgoingSchedule'],
      });
      toast.success('Data added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
