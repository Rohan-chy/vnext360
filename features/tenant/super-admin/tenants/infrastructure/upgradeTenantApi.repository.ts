import client from '@/core/network/httpClient';
import { UpgradeTenantSchemaFormValues } from '../domain/upgradeTenant.schema';

export const upgradeTenant = async (data: UpgradeTenantSchemaFormValues) => {
  return await client({
    url: `tenants/upgrade`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
