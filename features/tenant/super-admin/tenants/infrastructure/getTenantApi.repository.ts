import client from '@/core/network/httpClient';
import { responseTenants } from '../domain/getTenants.schema';

export const getTenants = async (): Promise<responseTenants[]> => {
  return await client({
    url: 'tenants',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
