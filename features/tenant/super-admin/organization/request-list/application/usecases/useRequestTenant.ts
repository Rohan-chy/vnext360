import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTenant } from '../../infrastructure/requestTenantApi.repository';
import { OrganizationRegistrationFormValues } from '../../domain/tenantRequest.schema';
import { toast } from 'sonner';

export const useRequestTenant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: OrganizationRegistrationFormValues) =>
      createTenant(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-tenant-requests'] });
      toast.success('Approved successfully.');
    },
  });
};
