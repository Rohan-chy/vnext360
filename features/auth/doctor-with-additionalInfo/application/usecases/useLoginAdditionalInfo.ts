import { useMutation } from '@tanstack/react-query';
import { loginDoctor } from '../../infrastructure/loginApi.repo';
import { LoginFormValues } from '../../domain/login.schema';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';
import { MESSAGES } from '@/core/messages/messages';

type StorageType = 'local' | 'session';

export const useLoginAdditionalInfo = (
  tenant: string,
  storageType: StorageType = 'local' // default
) => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginFormValues) => loginDoctor(data, tenant),

    onSuccess: (response: any) => {
      const token = response?.token;
      if (!token) return;

      if (storageType === 'local') {
        localStorage.setItem('token', token);
        localStorage.setItem('tenant', tenant);
      } else {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('tenant', tenant);
        router.replace('/doctor');
      }
      toast.success(MESSAGES.AUTH.LOGIN_SUCCESS);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
