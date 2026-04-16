'use client';
import { useQuery } from '@tanstack/react-query';
import { getProductAttribute } from '../../infrastructure/getProductAttributeApi.repo';
import { productAttributeData } from '../../domain/getProductAttribute.schema';

export const useGetProductAttribute = () => {
  return useQuery<productAttributeData>({
    queryKey: ['get-product-attribute'],
    queryFn: () => getProductAttribute(),
  });
};
