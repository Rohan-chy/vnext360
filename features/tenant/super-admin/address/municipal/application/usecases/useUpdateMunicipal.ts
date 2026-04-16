import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { MunicipalFormData } from '../../domain/municipal.schema';
import { updateMunicipal } from '../../infrastructure/updateMunicipalApi.repo';

export const useUpdateMunicipal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: MunicipalFormData) => updateMunicipal(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-Municipal'] });
      toast.success('Data added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
