'use client';
import { useQuery } from '@tanstack/react-query';
import { getClinicAllocation } from '../../infrastructure/getClinicAllocationApi.repo';

export const useGetClinicAllocation = () => {
  return useQuery({
    queryKey: ['get-clinic-allocation'],
    queryFn: () => getClinicAllocation(),
  });
};
