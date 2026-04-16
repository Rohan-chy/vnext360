import { CreateClinicReviewPayload } from '../../infrastructure/dto/addClinicReview.dto';
import { Clinic } from '../entities/clinic.entity';

export interface ClinicRepository {
  getClinics(): Promise<Clinic[]>;
  getClinicById(id: string): Promise<Clinic>;
  addClinicReview(payload: CreateClinicReviewPayload): Promise<void>;
}
