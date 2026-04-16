'use client';

import { useQuery } from '@tanstack/react-query';
import { getClinics } from '../../../application/useCases/getClinics';
import { ClinicRepositoryImpl } from '../../../infrastructure/repositories/clinicRepositoryImpl';
import { Clinic } from '../../../domain/entities/clinic.entity';

export const useGetClinics = () => {
  return useQuery<Clinic[], Error>({
    queryKey: ['clinics'],
    queryFn: () => getClinics(ClinicRepositoryImpl),
    // staleTime: 1000 * 60 * 5, // 5 min (avoid refetch spam)
    // gcTime: 1000 * 60 * 10, // cache cleanup after 10 min
    // retry: 2, // retry failed requests twice
    // refetchOnWindowFocus: false, // better UX for dashboard apps
  });
};
