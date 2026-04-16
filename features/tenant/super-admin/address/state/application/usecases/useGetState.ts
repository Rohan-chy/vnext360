'use client';
import { useQuery } from '@tanstack/react-query';
import { getState } from '../../infrastructure/getStateApi.repo';
import { StateListResponseDTO } from '../../infrastructure/dto/state.dto';

export const useGetState = () => {
  return useQuery<StateListResponseDTO>({
    queryKey: ['get-State'],
    queryFn: () => getState(),
  });
};
