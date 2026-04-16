import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { DistrictFormData } from '../../domain/district.schema';
import { updateDistrict } from '../../infrastructure/updateDistrictApi.repo';

export const useUpdateDistrict = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DistrictFormData) => updateDistrict(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-District'] });
      toast.success('Data added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
