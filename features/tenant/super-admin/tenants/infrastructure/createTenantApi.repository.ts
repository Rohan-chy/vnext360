import client from '@/core/network/httpClient';
import { TenantFormValues } from '../domain/createTenant.schema';

export const createTenant = async (data: TenantFormValues) => {
  return await client({
    url: 'tenants',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
