// types/DoctorVerification.ts
export interface DoctorCertification {
  id: string;
  certificationDetails: string;
  completionYear: number;
  completedFromInstitute: string;
  remarks: string;
  dynamicDocumentTypeId: string;
  baseAddress: string;
  documentUrl: string;
}

export interface DoctorExperience {
  id: string;
  instituteName: string;
  joinDate: string;
  completionDate: string;
  remarks: string;
  dynamicDocumentTypeId: string;
  baseAddress: string;
  documentUrl: string;
}

export interface DoctorBankDetail {
  id: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  accountType: string;
}

export interface DoctorVerification {
  id: string;
  doctorId: string;
  verificationDate: string;
  doctorCategoryId: string;
  doctorSubCategoryId: string;
  councilRegistrationNumber: string;
  briefBio: string;
  isVerified: boolean;
}

export interface DoctorVerificationData {
  doctorVerification: DoctorVerification;
  doctorCertifications: DoctorCertification[];
  doctorExperiences: DoctorExperience[];
  doctorTrainings: any[];
  doctorResearches: any[];
  doctorBankDetails: DoctorBankDetail[];
  doctorNominees: any[];
  doctorRelatives: any[];
}
