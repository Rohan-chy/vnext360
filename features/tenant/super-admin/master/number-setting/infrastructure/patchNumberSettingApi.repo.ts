import client from '@/core/network/httpClient';
import { CreateNumberSettingFormValues } from '../domain/createNumberSetting.schema';

export const patchNumberSetting = async (
  data: CreateNumberSettingFormValues
) => {
  return await client({
    url: `v1/patient/appointmentNumberSetting/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
