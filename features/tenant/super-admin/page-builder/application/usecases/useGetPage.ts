'use client';
import { useQuery } from '@tanstack/react-query';
import { getPage } from '../../infrastructure/getPageApi.repo';

export const useGetPage = () => {
  return useQuery({
    queryKey: ['get-page'],
    queryFn: () => getPage(),
  });
};
