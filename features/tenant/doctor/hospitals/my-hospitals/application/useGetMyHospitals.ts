'use client';
import { useQuery } from '@tanstack/react-query';
import { DoctorHospitalRequestListResponse } from '../domain/doctorHospitalResponse';
import { getMyHospitals } from '../infrastructure/getMyHospitalsApi.repo';

export const useGetMyHospitals = () => {
  return useQuery<DoctorHospitalRequestListResponse>({
    queryKey: ['get-myHospitals'],
    queryFn: () => getMyHospitals(),
  });
};
