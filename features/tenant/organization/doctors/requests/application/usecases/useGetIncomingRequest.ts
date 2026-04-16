'use client';
import { useQuery } from '@tanstack/react-query';
import { DoctorHospitalRequestListResponse } from '../../domain/doctorHospitalResponse';
import { getIncomingRequest } from '../../infrastructure/getIncomingRequestApi.repo';

export const useGetIncomingRequest = () => {
  return useQuery<DoctorHospitalRequestListResponse>({
    queryKey: ['get-incomingRequest-hospital'],
    queryFn: () => getIncomingRequest(),
  });
};
