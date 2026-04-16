import client from '@/core/network/httpClient';
import { Doctor, DoctorCategory, DoctorCategoryRepository } from '../../domain';
import { GetDoctorCategoriesResponseDTO } from '../dto/getDoctorCategories.dto';
import { GetDoctorsByCategoryIdResponseDTO } from '../dto/getDoctorsByCategoryId.dto';
import {
  mapDoctorCategoryListToEntity,
  mapDoctorListToEntity,
} from '../mappers/doctorCategory.mapper';

export const DoctorCategoryRepositoryImpl: DoctorCategoryRepository = {
  // GET ALL
  async getDoctorCategories(): Promise<DoctorCategory[]> {
    const response = await client<GetDoctorCategoriesResponseDTO>({
      url: 'v1/patient/doctorCategory',
      method: 'GET',
      isProtected: true,
      tokenSource: 'session',
    });

    return mapDoctorCategoryListToEntity(response);
  },

  // GET DOCTORS BY CATEGORY
  async getDoctorsByCategoryId(categoryId: string): Promise<Doctor[]> {
    const response = await client<GetDoctorsByCategoryIdResponseDTO>({
      url: `v1/patient/doctor/CategoryId/${categoryId}`,
      method: 'GET',
      isProtected: true,
      tokenSource: 'session',
    });

    return mapDoctorListToEntity(response);
  },
};
