export interface PatientContactAndAddressInfo {
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
