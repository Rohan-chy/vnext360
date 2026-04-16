import client from '@/core/network/httpClient';
import { ApproveRejectFormValues } from '../domain/approveReject.schema';

export const approveRejectSchedule = async (data: ApproveRejectFormValues) => {
  return await client({
    url: 'v1/patient/doctorClinicAllocation',
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
