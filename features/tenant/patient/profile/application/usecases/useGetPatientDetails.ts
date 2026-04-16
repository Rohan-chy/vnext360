'use client';
import { useQuery } from '@tanstack/react-query';
import { patientQueryKeys } from '../queryKeys/patient.queryKeys';
import { getPatientProfile } from '../../infrastructure/api/patient.api';

export const useGetPatientDetails = () => {
  return useQuery({
    queryKey: patientQueryKeys.profile,
    queryFn: () => getPatientProfile(),
  });
};
