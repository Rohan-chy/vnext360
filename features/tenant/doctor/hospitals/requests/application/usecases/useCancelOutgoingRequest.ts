import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { canceleOutgoingRequest } from '../../infrastructure/cancelOutgoingApi.repo';

export const useCancelOutgoingRequest = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => canceleOutgoingRequest(id),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ['get-outgoingRequest-doctor'],
      });
      toast.success('Request Cancelled Successfully.');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
