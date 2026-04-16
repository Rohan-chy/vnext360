export type ProductAttributeValue = {
  id: string;
  productAttributeId: string;
  productAttributeName: string;
  value: string;
};

export type ProductAttributeValueData = {
  data: ProductAttributeValue[];
};
