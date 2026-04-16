import client from '@/core/network/httpClient';
import { HsCodeResponse } from '../domain/schema/hsCodeResponse.schema';

export const getHsCode = async (): Promise<HsCodeResponse> => {
  return await client({
    url: 'v1/patient/hscode',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
