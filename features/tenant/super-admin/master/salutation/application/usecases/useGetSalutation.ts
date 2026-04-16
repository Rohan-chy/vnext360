'use client';
import { useQuery } from '@tanstack/react-query';
import { getSalutation } from '../../infrastructure/getSalutationApi.repo';
import { SalutationResponse } from '../../domain/getSalutationResponse.schema';

export const useGetSalutation = () => {
  return useQuery<SalutationResponse>({
    queryKey: ['get-salutation'],
    queryFn: () => getSalutation(),
  });
};
