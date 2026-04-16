import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addClinicReview } from '../../../application/useCases/addClinicReview';
import { ClinicRepositoryImpl } from '../../../infrastructure/repositories/clinicRepositoryImpl';
import { CreateClinicReviewPayload } from '../../../infrastructure/dto/addClinicReview.dto';

export const useAddClinicReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateClinicReviewPayload) =>
      addClinicReview(ClinicRepositoryImpl, payload),
    onSuccess: (_, variables) => {
      // refresh clinic details after review added
      queryClient.invalidateQueries({
        queryKey: ['clinic', variables.clinicId],
      });
      toast.success('Review added successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
