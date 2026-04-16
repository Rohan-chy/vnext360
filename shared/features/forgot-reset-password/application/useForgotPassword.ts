import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { MESSAGES } from '@/core/messages/messages';
import { getErrorMessage } from '@/core/error/errorHandler';
import { AxiosError } from 'axios';
import { ForgotPasswordFormValues } from '../domain/schemas/forgotPassword.schema';
import { forgotPassword } from '../infrastructure/forgotPasswordApi.repo';

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (data: ForgotPasswordFormValues) => forgotPassword(data),
    onSuccess: () => {
      toast.success(MESSAGES.AUTH.PASSWORD_RESET);
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
