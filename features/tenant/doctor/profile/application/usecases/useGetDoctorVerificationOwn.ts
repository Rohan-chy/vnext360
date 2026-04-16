'use client';
import { useQuery } from '@tanstack/react-query';
import { getDoctorVerificationOwn } from '../../infrastructure/useGetDoctorVerificationOwn';
import { DoctorVerificationData } from '../../domain/schema/doctorVerification.schema';

export const useGetDoctorVerificationOwn = () => {
  return useQuery<DoctorVerificationData>({
    queryKey: ['get-doctor-verification-own'],
    queryFn: () => getDoctorVerificationOwn(),
  });
};
