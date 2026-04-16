'use client';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../../infrastructure/getProductByIdApi.repo';
import { ProductDetailsResponse } from '../../domain/getProductById.schema';

export const useGetProductById = (
  productId: string,
  enable: boolean = true
) => {
  return useQuery<ProductDetailsResponse>({
    queryKey: ['get-productById', productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId && enable,
  });
};
