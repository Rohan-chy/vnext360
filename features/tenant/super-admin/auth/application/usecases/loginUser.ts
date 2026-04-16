import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login } from '../../infrastructure/loginApi.repository';
import { LoginFormValues } from '../../domain/login.schema';
import { useRouter } from 'next/navigation';
import { getUserFromToken } from '@/utils/user/getUserFromToken';
import { toast } from 'sonner';

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginFormValues) => login(data),

    onSuccess: (response: any) => {
      const token = response?.token;
      if (token) {
        sessionStorage.setItem('token', token);

        // Decode and store user globally in React Query
        const user = getUserFromToken(token);
        queryClient.setQueryData(['user'], user);

        toast.success('Login Successful');
        router.replace('/superAdmin/dashboard'); // Navigate after login
      }
    },
  });
};
