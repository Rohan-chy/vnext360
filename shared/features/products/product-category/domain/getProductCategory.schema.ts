export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  categoryId: string | null;
  categoryName: string;
  isActive: boolean;
  baseAddress: string;
  imageUrl: string | null;
};

export type ProductCategoryResponse = {
  data: ProductCategory[];
};
