'use client';
import { useQuery } from '@tanstack/react-query';
import { getCountry } from '../../infrastructure/getCountryApi.repo';
import { CountryListResponseDTO } from '../../infrastructure/dto/country.dto';

export const useGetCountry = () => {
  return useQuery<CountryListResponseDTO>({
    queryKey: ['get-country'],
    queryFn: () => getCountry(),
  });
};
