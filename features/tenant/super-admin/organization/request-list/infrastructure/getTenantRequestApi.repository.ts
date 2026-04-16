import client from '@/core/network/httpClient';
import { TenantRequestResponse } from '../domain/getTenantRequest.schema';

export const getTenantRequest = async (): Promise<TenantRequestResponse> => {
  return await client({
    url: 'v1/patient/tenantRequest',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
