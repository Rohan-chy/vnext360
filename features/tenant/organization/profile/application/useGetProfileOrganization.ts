'use client';
import { useQuery } from '@tanstack/react-query';
import { getProfileOrganization } from '../infrastructure/getProfileOrganization';
import { ProfileInfo } from '../domain/profileResponse.schema';

export const useGetProfileOrganization = () => {
  return useQuery<ProfileInfo>({
    queryKey: ['get-profile-organization'],
    queryFn: () => getProfileOrganization(),
  });
};
