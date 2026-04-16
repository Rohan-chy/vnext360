import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { createClinicAllocation } from '../../infrastructure/createAskQuestionApi.repo';
import { AskQuestionFormValues } from '../../domain/createAskQuestion.schema';

export const useCreateClinicAllocation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AskQuestionFormValues) => createClinicAllocation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-ask-question'] });
      toast.success('Clinic Allocated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
