import client from '@/core/network/httpClient';
import { OrganizationRegistrationFormValues } from '../domain/tenantRequest.schema';

export const createTenant = async (
  data: OrganizationRegistrationFormValues
) => {
  return await client({
    url: `v1/patient/tenantRequest/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
