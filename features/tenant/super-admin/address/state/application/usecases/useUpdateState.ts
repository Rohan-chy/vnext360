import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { stateFormData } from '../../domain/state.schema';
import { updateState } from '../../infrastructure/updateStateApi.repo';

export const useUpdateState = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: stateFormData) => updateState(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-State'] });
      toast.success('Data added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
