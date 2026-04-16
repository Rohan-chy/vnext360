import { useQuery } from '@tanstack/react-query';
import { getDocumentTypeByType } from '../../infrastructure/getDocumentTypeByTypeApi.repo';
import { DynamicDocumentTypeResponse } from '../../domain/DocumentTypeResponse';

export const useGetDocumentTypeByType = (type: number | null) => {
  return useQuery<DynamicDocumentTypeResponse>({
    queryKey: ['get-documentTypeByType', type],
    queryFn: () => getDocumentTypeByType(type!),
    enabled: type !== null,
  });
};
