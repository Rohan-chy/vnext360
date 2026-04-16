export interface GetDoctorsByCategoryIdResponseDTO {
  data: DoctorDTO[];
}

export interface DoctorDTO {
  id: string;
  title: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  gender: number;
  dateOfBirth: string;
  dateOfBirthNp: string;
  countryCode: string;
  contactNumber: string;
  imageBaseAddress: string;
  imagePath: string;
  email: string;
  categoryName: string;
  subCategoryName: string;
}
