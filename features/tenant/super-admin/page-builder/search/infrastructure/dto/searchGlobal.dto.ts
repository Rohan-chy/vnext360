export interface SearchGlobalResponseDTO {
  doctors: DoctorSearchDTO[];
  clinics: ClinicSearchDTO[];
}

export interface DoctorSearchDTO {
  id: string;
  searchType: number;
  salutation: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  category: string | null;
  description: string | null;
  baseAddress: string;
  imageUrl: string | null;
}

export interface ClinicSearchDTO {
  id: string;
  searchType: number;
  name: string;
  description: string | null;
  location: string;
  baseAddress: string;
  imageUrl: string | null;
}
