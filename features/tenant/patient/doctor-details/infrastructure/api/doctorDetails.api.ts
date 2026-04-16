import client from '@/core/network/httpClient';
import { DoctorDetailResponse } from '../dto/doctorDetails.dto';

export const getDoctorDetails = async (id: string) => {
  return await client<DoctorDetailResponse>({
    url: `v1.0/patient/doctor/detail/${id}`,
    method: 'GET',
    isProtected: false,
  });
};
