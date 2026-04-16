export interface PatientProfileResponse {
  id: string;
  title: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: number;
  dateOfBirth: string;
  dateOfBirthNp?: string;
  email?: string;
  countryCode?: string;
  contactNumber?: string;
  countryId?: string;
  stateId?: string;
  municipalityId?: string;
  districtId?: string;
  wardNumber?: number;
  addressLine?: string;
  pinCode?: string | null;
  baseAddress?: string;
  imageUrl?: string;
  additionalInformation?: {
    id: string;
    profession?: string;
    ethnicity?: string;
    emergencyContactNo?: string;
    religion?: string;
    bloodGroup?: string;
  };
  relatives?: Array<{
    id?: string;
    title?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    relationship?: string;
    countryCode?: string;
    contactNumber?: string;
  }> | null;
}

export interface PatientBasicInfoPayload {
  id?: string;
  title: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: number;
  dateOfBirth: string;
  dateOfBirthNp?: string;
  email?: string;
}

export interface PatientProfileImagePayload {
  patientId: string;
  image: File;
}

export interface PatientContactAndAddressInfoPayload {
  countryCode: string;
  contactNumber: string;

  countryId?: string;
  stateId?: string;
  municipalityId?: string;
  districtId?: string;

  wardNumber?: number;

  addressLine?: string;
  pinCode?: string;
}

export interface PatientAdditionalInfoPayload {
  profession: string;
  ethnicity: string;
  emergencyContactNo: string;
  religion: string;
  bloodGroup: string;
}

export interface RelativeInfo {
  id?: string;
  title?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  relationship: string;
  contactNumber: string;
  countryCode: string;
}

export interface PatientRelativesPayload {
  data: RelativeInfo[];
}

export interface DeleteRelativePayload {
  id: string;
}
