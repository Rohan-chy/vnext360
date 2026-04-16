import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { WardFormData } from '../../domain/ward.schema';
import { updateWard } from '../../infrastructure/updateWardApi.repo';

export const useUpdateWard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: WardFormData) => updateWard(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-Ward'] });
      toast.success('Data added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
