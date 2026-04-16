import client from '@/core/network/httpClient';
import { AskQuestionFormValues } from '../domain/createAskQuestion.schema';

export const createClinicAllocation = async (data: AskQuestionFormValues) => {
  return await client({
    url: 'v1/patient/doctorClinicAllocation',
    method: 'POST',
    payload: data,
    isProtected: false,
  });
};
