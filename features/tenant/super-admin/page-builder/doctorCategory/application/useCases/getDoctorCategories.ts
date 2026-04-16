import { DoctorCategoryRepository } from '../../domain';

export const getDoctorCategories = async (repo: DoctorCategoryRepository) => {
  return repo.getDoctorCategories();
};
