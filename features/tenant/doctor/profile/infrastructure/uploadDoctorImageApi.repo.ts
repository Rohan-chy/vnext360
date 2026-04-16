import client from '@/core/network/httpClient';
import { uploadDoctorImageFormValues } from '../domain/schema/uploadDoctorImage.schema';

export const uploadDoctorImage = async (data: uploadDoctorImageFormValues) => {
  const formData = new FormData();

  formData.append('doctorId', data.doctorId);

  // Append file properly
  if (data.image) {
    formData.append('image', data.image);
  }

  return await client({
    url: 'v1/patient/doctor',
    method: 'PUT',
    payload: formData,
    multipartFormdata: true, // VERY IMPORTANT
    isProtected: true,
    tokenSource: 'session',
  });
};
