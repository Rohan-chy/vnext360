'use client';
import { useQuery } from '@tanstack/react-query';
import { StateListResponseDTO } from '../../infrastructure/dto/state.dto';
import { getStateByCountryId } from '../../infrastructure/getStateByCountryId';

export const useGetStateByCountryId = (id: string) => {
  return useQuery<StateListResponseDTO>({
    queryKey: ['states', id],
    queryFn: () => getStateByCountryId(id),
    enabled: !!id,
  });
};
