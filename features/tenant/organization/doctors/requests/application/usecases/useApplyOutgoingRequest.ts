import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { applyOutgoingRequest } from '../../infrastructure/applyOutgoingRequestApli.repo';

export const useApplyOutgoingRequest = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => applyOutgoingRequest(id),
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
