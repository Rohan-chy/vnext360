import client from '@/core/network/httpClient';
import { DoctorHospitalRequestListResponse } from '../domain/doctorHospitalResponse';

export const getOutgoingRequest = async () => {
  const response = await client({
    url: `v1/patient/doctorClinicRequest/fordoctor`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as DoctorHospitalRequestListResponse;
};
