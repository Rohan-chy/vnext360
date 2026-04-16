import client from '@/core/network/httpClient';
import {
  DeleteRelativePayload,
  PatientAdditionalInfoPayload,
  PatientBasicInfoPayload,
  PatientContactAndAddressInfoPayload,
  PatientProfileResponse,
  PatientRelativesPayload,
} from '../dto/patientProfile.dto';
import { PatientProfileImageFormValues } from '../../domain/schemas/patientProfileImage.schema';

export const getPatientProfile = async () => {
  return await client<PatientProfileResponse>({
    url: `v1.0/patient/patientdetails/own`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};

export const postPatientBasicInfo = async (data: PatientBasicInfoPayload) => {
  return await client({
    url: `v1.0/patient/patientdetails/patientInfo`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};

export const postPatientContactAndAddressInfo = async (
  data: PatientContactAndAddressInfoPayload
) => {
  return await client({
    url: `v1.0/patient/patientdetails/patientContact`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};

export const postPatientAdditionalInfo = async (
  data: PatientAdditionalInfoPayload
) => {
  return await client({
    url: `v1.0/patient/patientdetails/additionalInfo`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};

export const postPatientRelatives = async (data: PatientRelativesPayload) => {
  return await client({
    url: `v1.0/patient/patientdetails/patientrelatives`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};

export const deletePatientRelative = async (id: DeleteRelativePayload) => {
  return await client({
    url: `v1.0/patient/patientdetails/relativeId/${id}`,
    method: 'DELETE',
    isProtected: true,
    tokenSource: 'session',
  });
};

export const uploadPatientImage = async (
  data: PatientProfileImageFormValues
) => {
  const formData = new FormData();

  formData.append('patientId', data.patientId);

  if (data.image) {
    formData.append('image', data.image);
  }

  return await client({
    url: 'v1.0/patient/patientdetails',
    method: 'PUT',
    payload: formData,
    multipartFormdata: true,
    isProtected: true,
    tokenSource: 'session',
  });
};
