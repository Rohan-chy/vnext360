import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTenantRequest } from '../../infrastructure/deleteTenantRequestApi.repo';
import { deleteData } from '@/types/delete';

export const useDeleteTenantRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteTenantRequest(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-tenant-requests'] });
    },
  });
};
