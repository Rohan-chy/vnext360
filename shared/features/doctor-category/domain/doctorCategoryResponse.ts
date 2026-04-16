export type DoctorCategory = {
  id: string;
  categoryName: string;
  description: string;
  imageBaseAddress: string;
  imagePath: string;
};

export type CategoryResponse = {
  data: DoctorCategory[];
};
