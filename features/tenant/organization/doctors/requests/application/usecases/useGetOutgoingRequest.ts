'use client';
import { useQuery } from '@tanstack/react-query';
import { DoctorHospitalRequestListResponse } from '../../domain/doctorHospitalResponse';
import { getOutgoingRequest } from '../../infrastructure/getOutgoingRequestApi.repo';

export const useGetOutgoingRequest = () => {
  return useQuery<DoctorHospitalRequestListResponse>({
    queryKey: ['get-outgoingRequest-hospital'],
    queryFn: () => getOutgoingRequest(),
  });
};
