'use client';
import { useQuery } from '@tanstack/react-query';
import { getMunicipalityByDistrictId } from '../../infrastructure/getMunicipalityByDistrictId';
import { MunicipalityListResponseDTO } from '../../infrastructure/dto/municipality.dto';

export const useGetMunicipalityByDistrictId = (id: string) => {
  return useQuery<MunicipalityListResponseDTO>({
    queryKey: ['municipalities', id],
    queryFn: () => getMunicipalityByDistrictId(id),
    enabled: !!id,
  });
};
