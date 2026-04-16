import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { putPage } from '../../infrastructure/putPage.repo';
import { CreatePageFormValues } from '../../domain/creatPage.schema';

export const usePutPage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePageFormValues) => putPage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-page'] });
      toast.success(' Data Updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
