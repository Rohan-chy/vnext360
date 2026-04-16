import client from '@/core/network/httpClient';
import { ApproveRejectAllocationFormValues } from '../domain/approveRejectAlloction.schema';

export const approveRejectAllocation = async (
  data: ApproveRejectAllocationFormValues
) => {
  return await client({
    url: 'v1/patient/doctorClinicAllocation',
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
