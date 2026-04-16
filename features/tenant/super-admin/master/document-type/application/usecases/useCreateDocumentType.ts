import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CreateDocumentTypePayload } from '../../domain/createDocumentType.schema';
import { createDocumentType } from '../../infrastructure/createDocumentTypeApi.repo';

export const useCreateDocumentType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateDocumentTypePayload) => createDocumentType(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-DocumentType'] });
      toast.success('DocumentType added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
