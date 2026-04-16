import { Doctor, DoctorCategory } from '../../domain';
import {
  DoctorCategoryDTO,
  GetDoctorCategoriesResponseDTO,
} from '../dto/getDoctorCategories.dto';
import { GetDoctorCategoryByIdResponseDTO } from '../dto/getDoctorCategoryById.dto';
import {
  DoctorDTO,
  GetDoctorsByCategoryIdResponseDTO,
} from '../dto/getDoctorsByCategoryId.dto';

//Single Category
export const mapDoctorCategoryToEntity = (
  dto: DoctorCategoryDTO | GetDoctorCategoryByIdResponseDTO
): DoctorCategory => {
  return {
    id: dto.id,
    categoryName: dto.categoryName,
    description: dto.description,
    imageUrl: dto.imagePath
      ? `http://${dto.imageBaseAddress}${dto.imagePath}`
      : undefined,
  };
};

//Category List
export const mapDoctorCategoryListToEntity = (
  response: GetDoctorCategoriesResponseDTO
): DoctorCategory[] => {
  return response.data.map(mapDoctorCategoryToEntity);
};

//Single Doctor
export const mapDoctorToEntity = (dto: DoctorDTO): Doctor => {
  return {
    id: dto.id,
    fullName:
      `${dto.title} ${dto.firstName} ${dto.middleName ?? ''} ${dto.lastName}`.trim(),
    gender: dto.gender,
    contactNumber: dto.contactNumber,
    email: dto.email,
    categoryName: dto.categoryName,
    subCategoryName: dto.subCategoryName,
    imageUrl: dto.imagePath
      ? `http://${dto.imageBaseAddress}${dto.imagePath}`
      : null,
  };
};

//Doctor List
export const mapDoctorListToEntity = (
  response: GetDoctorsByCategoryIdResponseDTO
): Doctor[] => {
  return response.data.map(mapDoctorToEntity);
};
