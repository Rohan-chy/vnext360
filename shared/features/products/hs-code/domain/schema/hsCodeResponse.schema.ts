export type hsCodeResponseItem = {
  id: string;
  productId: string;
  hsCode: string;
  description: string;
  activateDate: string;
  isActive: boolean;
};

export type HsCodeResponse = {
  data: hsCodeResponseItem[];
};
