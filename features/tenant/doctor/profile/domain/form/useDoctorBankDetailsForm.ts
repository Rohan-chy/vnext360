import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  DoctorBankDetailsFormSchema,
  DoctorBankDetailsFormValues,
} from '../schema/doctorBankDetails.schema';
import { emptyBank } from '../doctorFormDefaults';

export const useDoctorBankDetailsForm = (verifyDoctorData?: any) => {
  const DEFAULT_UUID = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const form = useForm<DoctorBankDetailsFormValues>({
    resolver: zodResolver(DoctorBankDetailsFormSchema),
    defaultValues: {
      doctorBankDetails: [emptyBank],
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (!verifyDoctorData) return;

    form.reset({
      doctorBankDetails:
        verifyDoctorData?.doctorBankDetails?.length > 0
          ? verifyDoctorData.doctorBankDetails.map((item: any) => ({
              id: item?.id ?? DEFAULT_UUID,
              bankName: item?.bankName ?? '',
              accountName: item?.accountName ?? '',
              accountNumber: item?.accountNumber ?? '',
              accountType: item?.accountType ?? '',
            }))
          : [emptyBank],
    });
  }, [verifyDoctorData, form]);

  return form;
};
