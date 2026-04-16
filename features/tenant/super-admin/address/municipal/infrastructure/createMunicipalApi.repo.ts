import client from '@/core/network/httpClient';
import { MunicipalFormData } from '../domain/municipal.schema';

export const createMunicipal = async (data: MunicipalFormData) => {
  return await client({
    url: 'v1/patient/municipality',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
