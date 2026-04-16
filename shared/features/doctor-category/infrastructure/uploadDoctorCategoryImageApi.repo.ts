import client from '@/core/network/httpClient';
import { uploadDoctorCategoryImageFormValues } from '../domain/uploadDoctorCategoryImage.schema';

export const uploadDoctorCategoryImage = async (
  data: uploadDoctorCategoryImageFormValues
) => {
  const formData = new FormData();

  formData.append('doctorCategoryId', data.doctorCategoryId);

  // Append file properly
  if (data.image) {
    formData.append('image', data.image);
  }

  return await client({
    url: 'v1/patient/doctorCategory',
    method: 'PUT',
    payload: formData,
    multipartFormdata: true, // VERY IMPORTANT
    isProtected: true,
    tokenSource: 'session',
  });
};
