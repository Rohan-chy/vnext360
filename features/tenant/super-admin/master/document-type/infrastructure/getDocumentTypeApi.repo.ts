import client from '@/core/network/httpClient';
import { DocumentData } from '../domain/documentTypeResponse.schema';

export const getDocumentType = async (): Promise<DocumentData> => {
  return await client({
    url: 'v1/patient/dynamicDocumentType',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
