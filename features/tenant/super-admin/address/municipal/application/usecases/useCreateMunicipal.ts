import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { MunicipalFormData } from '../../domain/municipal.schema';
import { createMunicipal } from '../../infrastructure/createMunicipalApi.repo';

export const useCreateMunicipal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: MunicipalFormData) => createMunicipal(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-Municipal'] });
      toast.success('Data added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
