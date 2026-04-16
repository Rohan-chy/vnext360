import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { MESSAGES } from '@/core/messages/messages';
import { getErrorMessage } from '@/core/error/errorHandler';
import { AxiosError } from 'axios';
import { resetPassword } from '../infrastructure/resetPasswordApi.repo';
import { ResetPasswordFormValues } from '../domain/schemas/resetPassword.schema';

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (data: ResetPasswordFormValues) => resetPassword(data),
    onSuccess: () => {
      toast.success(MESSAGES.AUTH.PASSWORD_CHANGED);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
