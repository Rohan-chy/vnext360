import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { ClinicScheduleFormValues } from '../../domain/forms/ClinicScheduleForm';
import { createClinicSchedule } from '../../infrastructure/createClinicScheduleApi.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useCreateClinicSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ClinicScheduleFormValues) => createClinicSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-clinicbyId'] });
      toast.success('Schedule Added Successfully');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
