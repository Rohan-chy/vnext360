import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { patientQueryKeys } from '../queryKeys/patient.queryKeys';
import { postPatientRelatives } from '../../infrastructure/api/patient.api';

export const usePostPatientRelatives = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => postPatientRelatives(data),
    onSuccess: () => {
      toast.success('Data saved  Successfully');
      queryClient.invalidateQueries({ queryKey: patientQueryKeys.profile });
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
