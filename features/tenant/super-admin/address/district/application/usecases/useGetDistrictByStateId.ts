'use client';
import { useQuery } from '@tanstack/react-query';
import { DistrictListResponseDTO } from '../../infrastructure/dto/district.dto';
import { getDistrictByStateId } from '../../infrastructure/getDistrictByStateIdApi.repo';

export const useGetDistrictByStateId = (id: string) => {
  return useQuery<DistrictListResponseDTO>({
    queryKey: ['districts', id],
    queryFn: () => getDistrictByStateId(id),
    enabled: !!id,
  });
};
