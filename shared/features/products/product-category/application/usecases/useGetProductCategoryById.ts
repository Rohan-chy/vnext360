'use client';
import { useQuery } from '@tanstack/react-query';
import { getProductCategoryById } from '../../infrastructure/getProductCategoryByIdApi.repo';

export const useGetProductCategoryById = (ProductCategoryId: string) => {
  return useQuery({
    queryKey: ['get-ProductCategoryById'],
    queryFn: () => getProductCategoryById(ProductCategoryId),
    enabled: !!ProductCategoryId,
  });
};
