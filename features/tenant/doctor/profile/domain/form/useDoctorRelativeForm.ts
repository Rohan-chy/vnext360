import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  DoctorRelativeFormValues,
  DoctorRelativeFormSchema,
} from '../schema/doctorRelative.schema';
import { emptyRelative } from '../doctorFormDefaults';

export const useDoctorRelativeForm = (verifyDoctorData?: any) => {
  const DEFAULT_UUID = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const form = useForm<DoctorRelativeFormValues>({
    // resolver: zodResolver(DoctorRelativeFormSchema),
    defaultValues: {
      doctorRelatives: [emptyRelative],
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (!verifyDoctorData) return;

    form.reset({
      doctorRelatives:
        verifyDoctorData?.doctorRelatives?.length > 0
          ? verifyDoctorData.doctorRelatives.map((item: any) => ({
              id: item?.id ?? DEFAULT_UUID,
              name: item?.name ?? '',
              relationship: item?.relation ?? '',
              contactNumber: item?.contactNumber ?? '',
            }))
          : [emptyRelative],
    });
  }, [verifyDoctorData, form]);

  return form;
};
