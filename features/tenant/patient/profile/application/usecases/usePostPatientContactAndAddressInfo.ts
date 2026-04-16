import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { patientQueryKeys } from '../queryKeys/patient.queryKeys';
import { postPatientContactAndAddressInfo } from '../../infrastructure/api/patient.api';

export const usePostPatientContactAndAddressInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => postPatientContactAndAddressInfo(data),
    onSuccess: () => {
      toast.success('Data saved  Successfully');
      queryClient.invalidateQueries({ queryKey: patientQueryKeys.profile });
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
