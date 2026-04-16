import client from '@/core/network/httpClient';
import { DistrictFormData } from '../domain/district.schema';

export const updateDistrict = async (data: DistrictFormData) => {
  return await client({
    url: `v1/patient/district/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
