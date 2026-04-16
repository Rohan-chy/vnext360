'use client';

import { useQuery } from '@tanstack/react-query';
import { VerifiedDoctorListResponse } from '../domain/verifiedDoctorResponse.schema';
import { getVerifiedDoctor } from '../infrastructure/getVerifiedDoctorApi.repo';

export const useGetVerifiedDoctor = () => {
  return useQuery<VerifiedDoctorListResponse>({
    queryKey: ['get-verifiedDoctor'],
    queryFn: getVerifiedDoctor,
  });
};
