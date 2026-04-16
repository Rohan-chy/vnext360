import { useMutation } from '@tanstack/react-query';
import { loginPatient } from '../../infrastructure/loginApi.repo';
import { EmailLoginFormValues } from '../../domain/login.schema';

export const useLogin = (tenant: string) => {
  return useMutation({
    mutationFn: (data: EmailLoginFormValues) => loginPatient(data, tenant),

    onSuccess: (response) => {
      const token = response?.token;
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('tenant', tenant);
      }
    },
  });
};
