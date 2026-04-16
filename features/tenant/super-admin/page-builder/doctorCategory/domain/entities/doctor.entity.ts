export interface Doctor {
  id: string;
  fullName: string;
  gender: number;
  contactNumber: string;
  email: string;

  categoryName: string;
  subCategoryName: string;

  imageUrl: string | null;
}
