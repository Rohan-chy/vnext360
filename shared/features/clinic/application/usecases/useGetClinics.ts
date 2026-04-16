'use client';
import { useQuery } from '@tanstack/react-query';
import { getClinics } from '../../infrastructure/getClinicApi.repo';
import { ClinicListResponse } from '../../domain/schemas/getClinic.schema';

export const useGetClinics = () => {
  return useQuery<ClinicListResponse>({
    queryKey: ['get-clinics'],
    queryFn: () => getClinics(),
  });
};
