'use client';
import { useQuery } from '@tanstack/react-query';
import { getDoctorProfile } from '../../infrastructure/getDoctorProfile';
import { UpdateDoctorPayload } from '../../domain/schema/updateDoctor.schema';

export const useGetDoctorProfile = () => {
  return useQuery<UpdateDoctorPayload>({
    queryKey: ['get-doctor-profile'],
    queryFn: () => getDoctorProfile(),
  });
};
