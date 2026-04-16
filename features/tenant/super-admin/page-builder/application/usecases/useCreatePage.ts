import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { createPage } from '../../infrastructure/createPageApi.repo';
import { CreatePageFormValues } from '../../domain/creatPage.schema';

export const useCreatePage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePageFormValues) => createPage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-page'] });
      toast.success('Data Added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
