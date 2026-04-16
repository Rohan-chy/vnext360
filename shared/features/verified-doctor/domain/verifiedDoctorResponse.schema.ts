export type DoctorCertification = {
  id: string;
  certificateName: string;
  issuingOrganization: string;
};

export type Clinic = {
  id: string;
  clinicId: string;
  name: string;
  location: string;
  type: string;
  pan: string;
  contactNo: string;
  baseAddress: string;
  url: string;
  averageRating: number;
  longitude: number;
  latitude: number;
};

export type VerifiedDoctorItem = {
  id: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: number;
  dateOfBirth: string;
  dateOfBirthNp: string;
  countryCode: string;
  contactNumber: string;
  imageBaseAddress: string;
  imagePath: string | null;
  email: string;
  categoryName: string;
  subCategoryName: string;
  isVerified: boolean;
  doctorCertifications: DoctorCertification[];
  clinics: Clinic[];
};

export type VerifiedDoctorListResponse = {
  data: VerifiedDoctorItem[];
};
