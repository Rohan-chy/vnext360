import { useQuery } from '@tanstack/react-query';
import { getTenants } from '../../infrastructure/getTenantApi.repository';
import { responseTenants } from '../../domain/getTenants.schema';

export const useGetTenants = () => {
  return useQuery<responseTenants[]>({
    queryKey: ['get-tenants'],
    queryFn: () => getTenants(),
  });
};
