'use client';
import { useQuery } from '@tanstack/react-query';
import { getDoctorVerificationByDoctorId } from '../../infrastructure/getDoctorVerificationByDoctorId';
import { DoctorVerificationData } from '../../domain/schema/doctorVerification.schema';

export const useGetDoctorVerificationByDoctorId = (id: string) => {
  const isValidUUID = (value: string) => {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(value);
  };

  return useQuery<DoctorVerificationData>({
    queryKey: ['get-doctor-verification', id],
    queryFn: () => getDoctorVerificationByDoctorId(id),
    enabled: isValidUUID(id),
  });
};
