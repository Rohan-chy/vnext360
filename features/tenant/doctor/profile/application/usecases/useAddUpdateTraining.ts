import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addUpdateTraining } from '../../infrastructure/addUpdateTrainingApi.repo';
import { SaveTrainingsPayload } from '../../domain/schema/doctorTraining.schema';

export const useAddUpdateTraining = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: SaveTrainingsPayload) => addUpdateTraining(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      // toast.success('Data Added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
