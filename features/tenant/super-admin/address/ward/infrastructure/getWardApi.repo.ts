import client from '@/core/network/httpClient';
import { GetWardResponse } from '../domain/response.schema';

export const getWard = async (): Promise<GetWardResponse> => {
  return await client({
    url: 'v1/patient/ward',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
