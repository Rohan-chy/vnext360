export interface ClinicListResponseDTO {
  data: ClinicListItemDTO[];
}

export interface ClinicListItemDTO {
  id: string;
  name: string;
  location: string;
  type: string;
  pan: string;
  contactNo: string;
  manager: string;
  registrationNumber: string;
  registrationDate: string;

  baseAddress: string;
  imageUrl: string;

  clinicImages: {
    id: string;
    imageUrl: string | null;
  }[];
  doctors: [];
  reviews: [];
}
