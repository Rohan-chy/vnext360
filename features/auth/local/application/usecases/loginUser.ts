import { useMutation } from '@tanstack/react-query';
import { login } from '../../infrastructure/loginApi.repository';
import { LoginFormValues } from '../../domain/login.schema';
import { useRouter } from 'next/navigation';

export const useLogin = (tenant: string) => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginFormValues) => login(data, tenant),

    onSuccess: (response) => {
      const token = response?.token;
      if (token) {
        localStorage.setItem('token', token);

        router.replace('dashboard'); //Navigate after successful login
      }
    },
  });
};
