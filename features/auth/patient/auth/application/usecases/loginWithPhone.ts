import { useMutation } from '@tanstack/react-query';
import { PhoneLoginFormValues } from '../../domain/login.schema';
import { toast } from 'sonner';
import { loginWithPhonePatient } from '../../infrastructure/loginWithPhoneApi.repo';
import { useRouter } from 'next/navigation';

export const useLoginWithPhone = (tenant: string) => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: PhoneLoginFormValues) =>
      loginWithPhonePatient(data, tenant),

    onSuccess: (response) => {
      const token = response?.token;
      if (token) {
        sessionStorage.setItem('token', token);
        toast.success('Logged in Successfully');
        router.push('/patient/home');
      }
    },
    onError: () => {
      toast.error('Login Error');
    },
  });
};
