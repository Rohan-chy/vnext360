import { ClinicReview, ClinicTiming } from '../../domain';

export interface GetClinicByIdDTO {
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

  doctors: {
    id: string;
    name: string;
    contactNo: string;
    baseAddress: string;
    imageUrl: string;
  }[];

  reviews: ClinicReview[];
  timings: ClinicTiming[];
}
