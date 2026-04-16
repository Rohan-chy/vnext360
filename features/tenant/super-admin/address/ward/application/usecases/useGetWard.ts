'use client';
import { useQuery } from '@tanstack/react-query';
import { getWard } from '../../infrastructure/getWardApi.repo';
import { GetWardResponse } from '../../domain/response.schema';

export const useGetWard = () => {
  return useQuery<GetWardResponse>({
    queryKey: ['get-Ward'],
    queryFn: () => getWard(),
  });
};
