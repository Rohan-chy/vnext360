import { useMutation } from '@tanstack/react-query';
import { loginOrganization } from '../../infrastructure/loginApi.repo';
import { EmailLoginFormValues } from '../../domain/login.schema';

export const useLogin = (tenant: string) => {
  return useMutation({
    mutationFn: (data: EmailLoginFormValues) => loginOrganization(data, tenant),

    onSuccess: (response) => {
      const token = response?.token;
      if (token) {
        localStorage.setItem('token', token);
      }
    },
  });
};
