'use client';
import { useQuery } from '@tanstack/react-query';
import { getDistrict } from '../../infrastructure/getDistrictApi.repo';
import { DistrictListResponseDTO } from '../../infrastructure/dto/district.dto';

export const useGetDistrict = () => {
  return useQuery<DistrictListResponseDTO>({
    queryKey: ['get-District'],
    queryFn: () => getDistrict(),
  });
};
