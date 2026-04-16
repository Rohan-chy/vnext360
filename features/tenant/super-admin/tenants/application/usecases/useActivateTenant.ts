import { useMutation, useQueryClient } from '@tanstack/react-query';
import { activateTenant } from '../../infrastructure/activateTenantApi.repository';
import { activateDeactivateTenant } from '../../domain/activateDeactivateTenant.schema';

export const useActivateTenant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: activateDeactivateTenant) => activateTenant(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-tenants'] });
    },
  });
};
