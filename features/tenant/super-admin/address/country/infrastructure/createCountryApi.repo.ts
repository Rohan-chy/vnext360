import client from '@/core/network/httpClient';
import { CountryFormData } from '../domain/country.schema';

export const createCountry = async (data: CountryFormData) => {
  return await client({
    url: 'v1/patient/country',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
