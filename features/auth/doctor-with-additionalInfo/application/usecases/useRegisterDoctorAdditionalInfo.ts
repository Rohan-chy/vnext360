import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { RegisterAdditionalInfoPayload } from '../../domain/registerDoctorAdditionalInfo.schema';
import { registerAdditionalInfoDoctor } from '../../infrastructure/registerAdditionalInfoApi.repo';
import { useRouter } from 'next/navigation';

export const useRegisterDoctorAdditionalInfo = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterAdditionalInfoPayload) =>
      registerAdditionalInfoDoctor(data),
    onSuccess: () => {
      toast.success(
        'Registration successful! Please check your email to activate your account before logging in.'
      );
      router.replace('/doctor/login');
    },
    onError: () => {
      toast.error('Registration failed. Please try again later.');
    },
  });
};
