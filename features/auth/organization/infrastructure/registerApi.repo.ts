import client from '@/core/network/httpClient';
import { OrganizationRegistrationFormValues } from '../domain/registerOrganization.schema';

export const registerOrganization = async (
  data: OrganizationRegistrationFormValues
) => {
  return await client({
    url: 'v1/Organization/member',
    method: 'POST',
    payload: data,
    isProtected: false,
  });
};
