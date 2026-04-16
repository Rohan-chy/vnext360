import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { DistrictFormData } from '../../domain/district.schema';
import { createDistrict } from '../../infrastructure/createDistrictApi.repo';

export const useCreateDistrict = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DistrictFormData) => createDistrict(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-District'] });
      toast.success('Data added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
