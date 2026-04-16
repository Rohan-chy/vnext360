'use client';
import { useQuery } from '@tanstack/react-query';
import { getOwnProduct } from '../../infrastructure/getOwnProductApi.repo';
import { ProductResponse } from '../../domain/getProduct.schema';

export const useGetOwnProduct = () => {
  return useQuery<ProductResponse>({
    queryKey: ['get-product'],
    queryFn: () => getOwnProduct(),
  });
};
