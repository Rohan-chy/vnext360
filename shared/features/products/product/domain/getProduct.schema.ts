export type Product = {
  productId: string;
  name: string;
  category: string;
  subCategory: string;
  brand: string;
  baseUrl: string;
  imageUrl: string;
  price: number;
};

export type ProductResponse = {
  data: Product[];
};
