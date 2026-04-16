import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { SalutationFormValues } from '../../domain/createSalutation.schema';
import { createSalutation } from '../../infrastructure/createSalutationApi.repo';

export const useCreateSalutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SalutationFormValues) => createSalutation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-salutation'] });
      toast.success('Salutation added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
