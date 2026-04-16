'use client';
import { useQuery } from '@tanstack/react-query';
import { getNumberSettings } from '../../infrastructure/getNumberSettingApi.repo';

export const useGetNumberSettings = () => {
  return useQuery({
    queryKey: ['get-NumberSettings'],
    queryFn: () => getNumberSettings(),
  });
};
