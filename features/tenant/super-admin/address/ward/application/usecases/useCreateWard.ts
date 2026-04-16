import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { WardFormData } from '../../domain/ward.schema';
import { createWard } from '../../infrastructure/createWardApi.repo';

export const useCreateWard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: WardFormData) => createWard(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-Ward'] });
      toast.success('Data added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
