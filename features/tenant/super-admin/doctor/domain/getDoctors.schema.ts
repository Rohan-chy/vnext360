export type DoctorsDetails = {
  id: string;
  title: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: number;
  dateOfBirth: string;
  dateOfBirthNp?: string;

  countryCode?: string | null;
  contactNumber: string;
  email: string;

  imageBaseAddress?: string;
  imagePath?: string;

  categoryName?: string;
  subCategoryName?: string | null;

  isVerified: boolean;
};

export type DoctorResponse = {
  data: DoctorsDetails[];
};
