import { useCreateTenant } from '@/features/tenant/super-admin/tenants/application/usecases/useCreateTenant';
import { useRequestTenant } from '../../application/usecases/useRequestTenant';
import { OrganizationRegistrationFormValues } from '../../domain/tenantRequest.schema';

type UseRequestHandleProps = {
  onSuccess?: () => void;
};

export const useRequestHandle = ({ onSuccess }: UseRequestHandleProps) => {
  const { mutate, isPending } = useRequestTenant();
  const { mutate: createTenant, isPending: pendingCreate } = useCreateTenant();

  const onSubmit = (values: OrganizationRegistrationFormValues) => {
    const { name, email, password, isApproved } = values || {};

    const createTenantPayload = {
      id: name,
      name,
      adminEmail: email,
      adminPassword: password,
      issuer: '',
    };

    // Always call request tenant API
    mutate(values, {
      onSuccess: () => {
        // If approved, then also create tenant
        if (isApproved) {
          createTenant(createTenantPayload, {
            onSuccess: () => {
              onSuccess?.(); // call success callback after both succeed
            },
          });
        } else {
          onSuccess?.(); // only requestTenant success
        }
      },
    });
  };

  return {
    onSubmit,
    loading: isPending || pendingCreate,
  };
};
