'use client';
import { useQuery } from '@tanstack/react-query';
import { getHsCode } from '../../infrastructure/getHsCodeApi.repo';
import { HsCodeResponse } from '../../domain/schema/hsCodeResponse.schema';

export const useGetHsCode = () => {
  return useQuery<HsCodeResponse>({
    queryKey: ['get-hscode'],
    queryFn: () => getHsCode(),
  });
};
