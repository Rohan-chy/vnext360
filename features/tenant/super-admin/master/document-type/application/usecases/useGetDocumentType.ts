'use client';
import { useQuery } from '@tanstack/react-query';
import { getDocumentType } from '../../infrastructure/getDocumentTypeApi.repo';
import { DocumentData } from '../../domain/documentTypeResponse.schema';

export const useGetDocumentType = () => {
  return useQuery<DocumentData>({
    queryKey: ['get-DocumentType'],
    queryFn: () => getDocumentType(),
  });
};
