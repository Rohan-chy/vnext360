import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { DoctorVerificationFormValues } from '../../domain/schema/doctorVerification.schema';
import { verifyDoctor } from '../../infrastructure/verifyDoctorApi.repo';

export const useVerifyDoctor = () => {
  return useMutation({
    mutationFn: (data: DoctorVerificationFormValues) => verifyDoctor(data),
    onSuccess: () => {
      toast.success('Data updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
