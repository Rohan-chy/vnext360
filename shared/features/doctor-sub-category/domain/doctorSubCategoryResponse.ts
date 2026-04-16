export type DoctorSubCategory = {
  id: string;
  subCategoryName: string;
  description: string;
  imageBaseAddress: string;
  imageUrl: string;
  doctorCategoryId: string;
  doctorCategoryName: string;
};

export type DoctorSubCategoryResponse = {
  data: DoctorSubCategory[];
};
