import client from '@/core/network/httpClient';
import { OrganizationRegistrationFormValues } from '../domain/registerOrganizationAdditionalInfo.schema';

export const registerAdditionalInfoOrganization = async (
  data: OrganizationRegistrationFormValues
) => {
  return await client({
    url: 'v1/patient/tenantRequest',
    method: 'POST',
    payload: data,
    isProtected: false,
  });
};
