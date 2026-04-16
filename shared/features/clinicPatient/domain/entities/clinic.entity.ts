import { ClinicDoctor } from './clinicDoctor.entity';
import { ClinicImage } from './clinicImage.entity';
import { ClinicReview } from './clinicReview.entity';
import { ClinicTiming } from './clinicTiming.entity';

export interface Clinic {
  id: string;
  name: string;
  location: string;
  type: string;

  pan: string;
  contactNo: string;
  manager: string;

  registrationNumber: string;
  registrationDate: string;

  // Computed / normalized
  logoUrl: string | null;
  clinicImages: ClinicImage[];

  doctors: ClinicDoctor[];
  reviews: ClinicReview[];
  timings: ClinicTiming[];
}
