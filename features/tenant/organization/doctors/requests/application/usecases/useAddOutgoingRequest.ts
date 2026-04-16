import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addOutgoingRequest } from '../../infrastructure/addOutgoingRequestApi.repo';
import { outgoingRequestSchemaFormValues } from '../../domain/outgoingRequest.schema';

export const useAddOutgoingRequest = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: outgoingRequestSchemaFormValues) =>
      addOutgoingRequest(data),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ['get-outgoingRequest-hospital'],
      });
      toast.success('Requested Successfully. Will be verified soon.');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
