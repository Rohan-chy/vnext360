import client from '@/core/network/httpClient';
import { activateDeactivateTenant } from '../domain/activateDeactivateTenant.schema';

export const activateTenant = async (data: activateDeactivateTenant) => {
  return await client({
    url: `tenants/${data?.id}/activate`,
    method: 'POST',
    payload: data?.id,
    isProtected: true,
    tokenSource: 'session',
  });
};
