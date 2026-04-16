import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginDoctor } from '../../infrastructure/loginApi.repo';
import { LoginFormValues } from '../../domain/login.schema';
import { useRouter } from 'next/navigation';
import { getUserFromToken, UserFromToken } from '@/utils/user/getUserFromToken';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';

export const useLoginAdditionalInfo = (tenant: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginFormValues) => loginDoctor(data, tenant),

    onSuccess: (response: any) => {
      const token = response?.token;
      if (!token) return;

      sessionStorage.setItem('token', token);
      sessionStorage.setItem('tenant', tenant);

      // Decode user information from token
      const user: UserFromToken = getUserFromToken(token);

      // Store user in React Query cache globally
      queryClient.setQueryData(['user'], user);

      toast.success(MESSAGES.AUTH.LOGIN_SUCCESS);
      // Navigate after login
      router.replace('/organization');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
