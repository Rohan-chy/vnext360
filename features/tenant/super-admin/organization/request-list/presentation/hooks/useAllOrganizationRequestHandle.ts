import { useState } from 'react';
import { useGetTenantRequests } from '../../application/usecases/useGetTenants';
import { TenantRequest } from '../../domain/getTenantRequest.schema';
import { Icons } from '@/shared/icons';

const doctorRequestsTab = [
  { title: 'Pending', value: 'pending', icon: Icons.ArrowDownLeft },
  { title: 'Approved', value: 'approved', icon: Icons.CheckCircle },
];

export const useAllOrganizationRequestHandle = () => {
  const { data: tenants } = useGetTenantRequests();
  const tenantRequests = tenants?.data || [];

  const [open, setOpen] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<TenantRequest | null>(
    null
  );

  const handleEdit = (request: TenantRequest) => {
    setSelectedTenant(request);
    setOpen(true);
  };

  return {
    tenantRequests,
    open,
    setOpen,
    selectedTenant,
    handleEdit,
    doctorRequestsTab,
  };
};
