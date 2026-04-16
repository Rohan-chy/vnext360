export interface GetDoctorCategoriesResponseDTO {
  data: DoctorCategoryDTO[];
}

export interface DoctorCategoryDTO {
  id: string;
  categoryName: string;
  description: string;
  imageBaseAddress: string;
  imagePath: string;
}
