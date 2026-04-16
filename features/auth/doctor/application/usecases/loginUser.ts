import { useMutation } from '@tanstack/react-query';
import { loginDoctor } from '../../infrastructure/loginApi.repo';
import { LoginFormValues } from '../../domain/login.schema';

export const useLogin = (tenant: string) => {
  return useMutation({
    mutationFn: (data: LoginFormValues) => loginDoctor(data, tenant),

    onSuccess: (response) => {
      const token = response?.token;
      if (token) {
        localStorage.setItem('token', token);
      }
    },
  });
};
