import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTenant } from '../../infrastructure/createTenantApi.repository';
import { TenantFormValues } from '../../domain/createTenant.schema';

export const useCreateTenant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TenantFormValues) => createTenant(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-tenants'] });
    },
  });
};
