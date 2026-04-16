'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserFromToken } from './getUserFromToken';

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => {
      const token = sessionStorage.getItem('token'); // you’re using sessionStorage
      if (!token) return null;

      return getUserFromToken(token);
    },
    staleTime: Infinity,
  });
};
