import { useQuery } from '@tanstack/react-query';
import { getTenantRequest } from '../../infrastructure/getTenantRequestApi.repository';
import { TenantRequestResponse } from '../../domain/getTenantRequest.schema';

export const useGetTenantRequests = () => {
  return useQuery<TenantRequestResponse>({
    queryKey: ['get-tenant-requests'],
    queryFn: () => getTenantRequest(),
  });
};
