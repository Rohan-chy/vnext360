import client from '@/core/network/httpClient';
import { updateDoctorVerificationUploadFormValues } from '../domain/schema/updateDoctorVerificationUpload.schema';

export interface DoctorUploadResponse {
  imageUrl: string;
}

export const updateDoctorVerificationUpload = async (
  data: updateDoctorVerificationUploadFormValues
): Promise<DoctorUploadResponse> => {
  const formData = new FormData();

  formData.append('doctorId', data?.doctorId);
  formData.append('dynamicDocumentTypeId', data?.dynamicDocumentTypeId);

  if (data.image) {
    formData.append('image', data?.image);
  }

  return await client({
    url: `v1/patient/doctorVerification/upload`,
    method: 'PUT',
    payload: formData,
    multipartFormdata: true,
    isProtected: true,
    tokenSource: 'session',
  });
};
