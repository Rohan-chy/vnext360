'use client';
import { useQuery } from '@tanstack/react-query';
import { getProductAttributeValue } from '../../infrastructure/getProductAttributeValueApi.repo';
import { ProductAttributeValueData } from '../../domain/getProductAttributeValue.schema';

export const useGetProductAttributeValue = () => {
  return useQuery<ProductAttributeValueData>({
    queryKey: ['get-product-attribute-value'],
    queryFn: () => getProductAttributeValue(),
  });
};
