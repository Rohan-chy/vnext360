import client from '@/core/network/httpClient';
import { CreateDocumentTypePayload } from '../domain/createDocumentType.schema';

export const createDocumentType = async (data: CreateDocumentTypePayload) => {
  return await client({
    url: 'v1/patient/dynamicDocumentType',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
