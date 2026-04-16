import { DoctorCategoryRepository } from '../../domain';

export const getDoctorsByCategoryId = async (
  repo: DoctorCategoryRepository,
  categoryId: string
) => {
  if (!categoryId) throw new Error('Category ID is required');

  return repo.getDoctorsByCategoryId(categoryId);
};
