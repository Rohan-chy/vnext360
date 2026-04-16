'use client';
import { useQuery } from '@tanstack/react-query';
import { getClinicById } from '../../infrastructure/useGetClinicByIdApi.repo';
import { ClinicResponseById } from '../../domain/schemas/getClinicById.schema';

export const useGetClinicById = (id: string, enabled: boolean = true) => {
  return useQuery<ClinicResponseById>({
    queryKey: ['get-clinicbyId', id],
    queryFn: () => getClinicById(id),
    enabled: !!id && enabled,
  });
};
