import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateDoctorVerification } from '../../infrastructure/updateDoctorVerificationApi.repo';
import { DoctorVerificationFormValues } from '../../domain/schema/doctorVerification.schema';

export const useUpdateDoctorVerification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DoctorVerificationFormValues) =>
      updateDoctorVerification(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      toast.success('Data updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
