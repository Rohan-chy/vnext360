import client from '@/core/network/httpClient';
import { updateClinicImageFormValues } from '../domain/forms/updateClinicImageForm';

export const uploadClinicImage = async (data: updateClinicImageFormValues) => {
  const formData = new FormData();

  formData.append('clinicId', data.clinicId);

  // Append file properly
  if (data.image) {
    formData.append('image', data.image);
  }

  return await client({
    url: 'v1/patient/clinic',
    method: 'PUT',
    payload: formData,
    multipartFormdata: true, // VERY IMPORTANT
    isProtected: true,
    tokenSource: 'session',
  });
};
