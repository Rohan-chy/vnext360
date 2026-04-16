import client from '@/core/network/httpClient';
import { activateDeactivateTenant } from '../domain/activateDeactivateTenant.schema';

export const dectivateTenant = async (data: activateDeactivateTenant) => {
  return await client({
    url: `tenants/${data?.id}/deactivate`,
    method: 'POST',
    payload: data?.id,
    isProtected: true,
    tokenSource: 'session',
  });
};
