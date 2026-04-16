import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { ClinicScheduleFormValues } from '../../domain/forms/ClinicScheduleForm';
import { updateClinicSchedule } from '../../infrastructure/updateClinicSchedule.repo';

export const useUpdateClinicSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ClinicScheduleFormValues) => updateClinicSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-clinicbyId'] });
      toast.success('Schedule Updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
