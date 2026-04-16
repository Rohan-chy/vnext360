import client from '@/core/network/httpClient';
import { CountryFormData } from '../domain/country.schema';

export const updateCountry = async (data: CountryFormData) => {
  return await client({
    url: `v1/patient/country/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
