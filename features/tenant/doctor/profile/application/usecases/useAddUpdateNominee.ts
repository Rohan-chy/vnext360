import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { SaveNomineesPayload } from '../../domain/schema/doctorNominee.schema';
import { addUpdateNominee } from '../../infrastructure/addUpdateNomineeApi.repo';

export const useAddUpdateNominee = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: SaveNomineesPayload) => addUpdateNominee(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      // toast.success('Data Added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
