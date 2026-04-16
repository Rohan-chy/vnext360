import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CreateDocumentTypePayload } from '../../domain/createDocumentType.schema';
import { putDocumentType } from '../../infrastructure/putDocumentTypeApi.repo';

export const usePutDocumentType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateDocumentTypePayload) => putDocumentType(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-DocumentType'] });
      toast.success(' Data Updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
