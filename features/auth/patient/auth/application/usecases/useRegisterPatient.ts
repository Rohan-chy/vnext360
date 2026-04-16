import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { PatientRegistrationFormValues } from '../../domain/registerPatient.schema';
import { registerPatient } from '../../infrastructure/registerApi.repo';
import { useRouter } from 'next/navigation';

export const useRegisterPatient = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: PatientRegistrationFormValues) => registerPatient(data),
    onSuccess: () => {
      toast.success('Registered Successfully');
      router.push('/patient/login');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
