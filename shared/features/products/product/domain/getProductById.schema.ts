export type ProductDetailsResponse = {
  id: string;
  name: string;
  sku: string;
  upc: string;
  ean: string;

  category: string;
  subCategory: string;
  brand: string;
  manufacturer: string;
  model: string;
  variant: string;
  version: string;

  shortDescription: string;
  longDescription: string;

  basePrice: number;
  discount: number;
  bulkPrice: number;
  tax: number;

  currency: string;

  minimumOrderQuantity: number;
  maximumOrderQuantity: number;
  leadTimeInDays: number;

  dimensionLWH: string;
  netWeight: number;
  grossWeight: number;

  hsCode: string;
  returnOrWarrantyPolicy: string;
  targetAudience: string;
  usecase: string;
  contractTerms: string;
  sustainabilityInfo: string;

  productCategoryId: string;

  baseUrl: string;
  imageUrl: string;
  alternateBaseUrl: string;

  imageUrls: alternateImage[];

  reviewsCount: number;
  reviews: Review[];

  dynamicAttributes: DynamicAttribute[];

  faqAs: FAQ[];
};

type alternateImage = {
  id: string;
  value: string;
};

export type Review = {
  id: string;
  name: string;
  review: string;
  rating: number;
  baseAddress: string;
  imageUrl: string;
  date: string; // ISO string
};

export type DynamicAttribute = {
  attributeName: string;
  attributeValue: string;
  attributeValueId: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  answerPerson: string;
  ratings: number;
};
