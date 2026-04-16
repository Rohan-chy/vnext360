import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getErrorMessage } from '@/core/error/errorHandler';
import { AxiosError } from 'axios';
import { MESSAGES } from '@/core/messages/messages';
import { deleteHsCode } from '../../infrastructure/deleteHsCodeApi.repo';
import { deleteData } from '@/types/delete';

export const useDeleteHsCode = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: deleteData) => deleteHsCode(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-hscode'] });
      toast.success(MESSAGES.CRUD.DELETE_SUCCESS);
    },
    onError: (error: AxiosError) => {
      getErrorMessage(error);
    },
  });
};
