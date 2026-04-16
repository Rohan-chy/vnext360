import { ClinicRepository } from '../../domain';
import { CreateClinicReviewPayload } from '../../infrastructure/dto/addClinicReview.dto';

export const addClinicReview = async (
  repo: ClinicRepository,
  payload: CreateClinicReviewPayload
) => {
  return repo.addClinicReview(payload);
};
