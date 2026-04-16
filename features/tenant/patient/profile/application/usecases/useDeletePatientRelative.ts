import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patientQueryKeys } from '../queryKeys/patient.queryKeys';
import { deletePatientRelative } from '../../infrastructure/api/patient.api';
import { toast } from 'sonner';
import { DeleteRelativePayload } from '../../infrastructure/dto/patientProfile.dto';

export const useDeletePatientRelative = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: DeleteRelativePayload) => deletePatientRelative(id),

    onSuccess: () => {
      toast.success('Data deleted successfully');
      queryClient.invalidateQueries({
        queryKey: patientQueryKeys.profile,
      });
    },

    onError: () => {
      toast.error('Failed to delete relative');
    },
  });
};
