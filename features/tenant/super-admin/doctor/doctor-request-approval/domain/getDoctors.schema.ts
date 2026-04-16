export type DoctorsResponse = {
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
  isVerified: string;
};

export type GetDoctorsApiResponse = {
  data: DoctorsResponse[];
};
