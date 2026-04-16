import client from '@/core/network/httpClient';
import { WardFormData } from '../domain/ward.schema';

export const updateWard = async (data: WardFormData) => {
  return await client({
    url: `v1/patient/ward/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
