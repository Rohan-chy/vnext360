import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createClinic } from '../../infrastructure/createClinic.repo';
import { toast } from 'sonner';
import { CreateClinicFormValues } from '../../domain/forms/createClinicForm';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useCreateClinic = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateClinicFormValues) => createClinic(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-clinics'] });
      toast.success('Clinic Added Successfully');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
