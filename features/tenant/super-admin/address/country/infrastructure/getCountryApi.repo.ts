import client from '@/core/network/httpClient';
import { CountryListResponseDTO } from './dto/country.dto';

export const getCountry = async (): Promise<CountryListResponseDTO> => {
  return await client({
    url: 'v1/patient/country',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
