import client from '@/core/network/httpClient';
import { WardFormData } from '../domain/ward.schema';

export const createWard = async (data: WardFormData) => {
  return await client({
    url: 'v1/patient/ward',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
