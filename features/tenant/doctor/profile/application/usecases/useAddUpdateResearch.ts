import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addUpdateResearch } from '../../infrastructure/addUpdateResearchApi.repo';
import { SaveResearchPayload } from '../../domain/schema/doctorResearch.schema';

export const useAddUpdateResearch = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: SaveResearchPayload) => addUpdateResearch(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      // toast.success('Data Added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
