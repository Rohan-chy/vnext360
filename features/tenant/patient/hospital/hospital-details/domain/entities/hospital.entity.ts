export interface Hospital {
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
  clinicImages: string[];
  doctors: Doctor[];
}

export interface Doctor {
  id: string;
  name: string;
  contactNo: string;
  imageUrl: string;
}
