import { deleteData } from '@/types/delete';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteProductAttributeValue } from '../../infrastructure/deleteProductAttributeValueApi.repo';

export const useDeleteProductAttributeValue = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteProductAttributeValue(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-product-attribute-value'],
      });
      toast.error('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
