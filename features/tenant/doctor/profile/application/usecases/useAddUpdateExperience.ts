import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { SaveExperiencesPayload } from '../../domain/schema/DoctorExperience.schema';
import { addUpdateExperience } from '../../infrastructure/addUpdateExperienceApi.repo';

export const useAddUpdateExperience = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: SaveExperiencesPayload) => addUpdateExperience(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      // toast.success('Data Added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
