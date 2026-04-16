import client from '@/core/network/httpClient';
import { MunicipalFormData } from '../domain/municipal.schema';

export const updateMunicipal = async (data: MunicipalFormData) => {
  return await client({
    url: `v1/patient/municipality/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
