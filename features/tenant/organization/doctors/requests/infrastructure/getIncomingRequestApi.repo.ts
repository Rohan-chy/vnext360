import client from '@/core/network/httpClient';
import { DoctorHospitalRequestListResponse } from '../domain/doctorHospitalResponse';

export const getIncomingRequest = async () => {
  const response = await client({
    url: `v1/patient/doctorClinicRequest/byhospital`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as DoctorHospitalRequestListResponse;
};
