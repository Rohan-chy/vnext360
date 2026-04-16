import { deleteData } from '@/types/delete';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteProductAttribute } from '../../infrastructure/deleteProductAttributeApi.repo';

export const useDeleteProductAttribute = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteProductAttribute(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-product-attribute'] });
      toast.error('Data Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
