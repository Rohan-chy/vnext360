import client from '@/core/network/httpClient';
import { ProfileInfo } from '../domain/profileResponse.schema';

export const getProfileOrganization = async (): Promise<ProfileInfo> => {
  return await client({
    url: `v1/patient/clinic/own`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
