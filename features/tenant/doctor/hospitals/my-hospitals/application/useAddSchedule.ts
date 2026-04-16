import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addSchedules } from '../infrastructure/addScheduleApi.repo';
import { AddScheduleFormValues } from '../domain/addSchedules.schema';

export const useAddSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AddScheduleFormValues) => addSchedules(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-doctor-schedules'] });
      toast.success('Slot added successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
