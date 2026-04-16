import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addProductImageFormValues } from '../../domain/addProductImage.schema';
import { addProductImage } from '../../infrastructure/addProductImageApi.repo';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/core/error/errorHandler';

export const useAddProductImage = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: addProductImageFormValues) => addProductImage(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-product'] });
      toast.success('Image updated successfully.');
    },
    onError: (error: AxiosError) => {
      toast.error(getErrorMessage(error));
    },
  });
};
