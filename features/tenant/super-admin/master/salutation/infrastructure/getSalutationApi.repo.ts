import client from '@/core/network/httpClient';
import { SalutationResponse } from '../domain/getSalutationResponse.schema';

export const getSalutation = async (): Promise<SalutationResponse> => {
  return await client({
    url: 'v1/patient/salutation',
    method: 'GET',
    isProtected: false,
  });
};
