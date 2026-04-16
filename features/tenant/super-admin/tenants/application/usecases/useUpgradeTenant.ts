import { useMutation, useQueryClient } from '@tanstack/react-query';
import { upgradeTenant } from '../../infrastructure/upgradeTenantApi.repository';
import { UpgradeTenantSchemaFormValues } from '../../domain/upgradeTenant.schema';

export const useUpgradeTenant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpgradeTenantSchemaFormValues) => upgradeTenant(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-tenants'] });
    },
  });
};
