// Single clinic
export type ClinicResponse = {
  id: string;
  name: string;
  location: string;
  type: string;
  pan: string | null; // match API, can be null
  contactNo: string;
  manager: string;
  registrationNumber: string;
  registrationDate: string;
};

// Full API response
export type ClinicListResponse = {
  data: ClinicResponse[];
};
