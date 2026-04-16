import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateOutgoingRequestSchemaFormValues } from '../../domain/outgoingRequest.schema';
import { updateIncomingRequest } from '../../infrastructure/updateIncomingRequestApi.repo';

export const useUpdateIncomingRequest = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: updateOutgoingRequestSchemaFormValues) =>
      updateIncomingRequest(data),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ['get-incomingRequest-doctor'],
        refetchType: 'all',
      });
      toast.success('Updated Successfully.');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
