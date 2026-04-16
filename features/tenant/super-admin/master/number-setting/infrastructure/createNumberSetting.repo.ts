import client from '@/core/network/httpClient';
import { CreateNumberSettingFormValues } from '../domain/createNumberSetting.schema';

export const createNumberSetting = async (
  data: CreateNumberSettingFormValues
) => {
  return await client({
    url: 'v1/patient/appointmentNumberSetting',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
