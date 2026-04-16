import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteDocumentType } from '../../infrastructure/deleteDocumentTypeApi.repo';

export const useDeleteDocumentType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteDocumentType(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-DocumentType'] });
      toast.error('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
