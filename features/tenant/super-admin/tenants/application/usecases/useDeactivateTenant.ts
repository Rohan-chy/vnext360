import { useMutation, useQueryClient } from '@tanstack/react-query';
import { activateDeactivateTenant } from '../../domain/activateDeactivateTenant.schema';
import { dectivateTenant } from '../../infrastructure/deactivateTenantApi.repository';

export const useDeactivateTenant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: activateDeactivateTenant) => dectivateTenant(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-tenants'] });
    },
  });
};
