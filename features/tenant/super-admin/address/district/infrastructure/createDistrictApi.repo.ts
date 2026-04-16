import client from '@/core/network/httpClient';
import { DistrictFormData } from '../domain/district.schema';

export const createDistrict = async (data: DistrictFormData) => {
  return await client({
    url: 'v1/patient/district',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
