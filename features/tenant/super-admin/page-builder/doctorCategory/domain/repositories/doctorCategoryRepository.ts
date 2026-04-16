import { Doctor } from '../entities/doctor.entity';
import { DoctorCategory } from '../entities/doctorCategory.entity';

export interface DoctorCategoryRepository {
  getDoctorCategories(): Promise<DoctorCategory[]>;
  getDoctorsByCategoryId(categoryId: string): Promise<Doctor[]>;
}
