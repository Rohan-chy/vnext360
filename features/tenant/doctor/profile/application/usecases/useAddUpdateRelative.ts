import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { SaveRelativesPayload } from '../../domain/schema/doctorRelative.schema';
import { addUpdateRelative } from '../../infrastructure/addUpdateRelativeApi.repo';

export const useAddUpdateRelative = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: SaveRelativesPayload) => addUpdateRelative(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      // toast.success('Data Added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
