import client from '@/core/network/httpClient';
import { DynamicDocumentTypeResponse } from '../domain/DocumentTypeResponse';

export const getDocumentTypeByType = async (
  type: number
): Promise<DynamicDocumentTypeResponse> => {
  return await client({
    url: `v1/patient/dynamicDocumentType/${type}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
