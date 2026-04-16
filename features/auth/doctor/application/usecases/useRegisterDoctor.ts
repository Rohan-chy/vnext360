import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { DoctorRegistrationFormValues } from '../../domain/registerDoctor.schema';
import { registerDoctor } from '../../infrastructure/registerApi.repo';

export const useRegisterDoctor = () => {
  return useMutation({
    mutationFn: (data: DoctorRegistrationFormValues) => registerDoctor(data),
    onSuccess: () => {
      toast.success('Clinic Added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
