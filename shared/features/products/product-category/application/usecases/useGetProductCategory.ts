'use client';
import { useQuery } from '@tanstack/react-query';
import { getProductCategory } from '../../infrastructure/getProductCategoryApi.repo';
import { ProductCategoryResponse } from '../../domain/getProductCategory.schema';

export const useGetProductCategory = () => {
  return useQuery<ProductCategoryResponse>({
    queryKey: ['get-ProductCategory'],
    queryFn: () => getProductCategory(),
  });
};
