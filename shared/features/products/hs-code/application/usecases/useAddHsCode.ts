import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { hsCodeFormValues } from '../../domain/forms/useCreateHsCodeForm';
import { addHsCode } from '../../infrastructure/addHsCodeApi.repo';
import { getErrorMessage } from '@/core/error/errorHandler';
import { AxiosError } from 'axios';
import { MESSAGES } from '@/core/messages/messages';

export const useAddHsCode = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: hsCodeFormValues) => addHsCode(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-hscode'] });
      toast.success(MESSAGES.CRUD.CREATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      getErrorMessage(error);
    },
  });
};
