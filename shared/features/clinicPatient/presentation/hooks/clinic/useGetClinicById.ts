'use client';

import { useQuery } from '@tanstack/react-query';
import { getClinicById } from '../../../application/useCases/getClinicById';
import { ClinicRepositoryImpl } from '../../../infrastructure/repositories/clinicRepositoryImpl';
import { Clinic } from '../../../domain/entities/clinic.entity';

export const useGetClinicById = (id: string) => {
  return useQuery<Clinic>({
    queryKey: ['clinic', id],
    queryFn: () => getClinicById(ClinicRepositoryImpl, id),
    enabled: !!id,
  });
};
