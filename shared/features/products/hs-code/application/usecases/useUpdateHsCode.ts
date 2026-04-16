import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { hsCodeFormValues } from '../../domain/forms/useCreateHsCodeForm';
import { getErrorMessage } from '@/core/error/errorHandler';
import { AxiosError } from 'axios';
import { MESSAGES } from '@/core/messages/messages';
import { updateHsCode } from '../../infrastructure/updateHsCodeApi.repo';

export const useUpdateHsCode = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: hsCodeFormValues) => updateHsCode(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-hscode'] });
      toast.success(MESSAGES.CRUD.UPDATE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      getErrorMessage(error);
    },
  });
};
