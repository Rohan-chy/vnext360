import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { putSalutation } from '../../infrastructure/putSalutationApi.repo';
import { SalutationFormValues } from '../../domain/createSalutation.schema';

export const usePutSalutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SalutationFormValues) => putSalutation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-salutation'] });
      toast.success(' Salutation Updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
