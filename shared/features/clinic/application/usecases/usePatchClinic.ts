import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchClinic } from '../../infrastructure/patchClinic.repo';
import { toast } from 'sonner';
import { CreateClinicFormValues } from '../../domain/forms/createClinicForm';

export const usePatchClinic = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateClinicFormValues) => patchClinic(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-clinics'] });
      toast.success('Clinic updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
