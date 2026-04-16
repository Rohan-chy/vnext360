'use client';
import { useQuery } from '@tanstack/react-query';
import { getMunicipal } from '../../infrastructure/getMunicipalApi.repo';
import { MunicipalityListResponseDTO } from '../../infrastructure/dto/municipality.dto';

export const useGetMunicipal = () => {
  return useQuery<MunicipalityListResponseDTO>({
    queryKey: ['get-Municipal'],
    queryFn: () => getMunicipal(),
  });
};
