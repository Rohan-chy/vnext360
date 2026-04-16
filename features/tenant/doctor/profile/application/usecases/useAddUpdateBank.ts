import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { SaveBankDetailsPayload } from '../../domain/schema/doctorBankDetails.schema';
import { addUpdateBank } from '../../infrastructure/addUpdateBankApi.repo';

export const useAddUpdateBank = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: SaveBankDetailsPayload) => addUpdateBank(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-verification'] });
      toast.success(
        'Applied Successfully. Your profile will be verified soon.'
      );
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
