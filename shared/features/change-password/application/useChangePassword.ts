import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { changePassword } from '../infrastructure/changePasswordApi.repo';
import { ChangePasswordFormValues } from '../domain/changePassword.schema';
import { MESSAGES } from '@/core/messages/messages';
import { getErrorMessage } from '@/core/error/errorHandler';
import { AxiosError } from 'axios';
import { useLogout } from '@/utils/user/useLogout';

export const useChangePassword = (loginUrl: string) => {
  const { logout } = useLogout();

  return useMutation({
    mutationFn: (data: ChangePasswordFormValues) => changePassword(data),
    onSuccess: () => {
      toast.success(MESSAGES.AUTH.PASSWORD_CHANGED);
      logout(loginUrl);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
