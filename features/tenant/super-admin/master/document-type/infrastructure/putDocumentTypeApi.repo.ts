import client from '@/core/network/httpClient';
import { CreateDocumentTypePayload } from '../domain/createDocumentType.schema';

export const putDocumentType = async (data: CreateDocumentTypePayload) => {
  return await client({
    url: `v1/patient/dynamicDocumentType/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
