import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  DoctorCertificationFormValues,
  DoctorEducationCertifySchema,
} from '../schema/doctorCertification.schema';
import { emptyCertification } from '../doctorFormDefaults';

export const useDoctorCertificationForm = (doctorVerificationData?: any) => {
  const DEFAULT_UUID = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const form = useForm<DoctorCertificationFormValues>({
    resolver: zodResolver(DoctorEducationCertifySchema),

    defaultValues: {
      doctorCertifications: [emptyCertification], // one row by default
    },

    mode: 'onChange',
  });

  useEffect(() => {
    if (!doctorVerificationData) return;

    form.reset({
      doctorCertifications:
        doctorVerificationData?.doctorCertifications?.length > 0
          ? doctorVerificationData.doctorCertifications.map((item: any) => ({
              id: item?.id ?? DEFAULT_UUID,
              certificationDetails: item?.certificationDetails ?? '',
              completionYear: item?.completionYear ?? new Date().getFullYear(),
              completedFromInstitute: item?.completedFromInstitute ?? '',
              remarks: item?.remarks ?? '',
              dynamicDocumentTypeId: item?.dynamicDocumentTypeId ?? '',
              documentUrl: item?.documentUrl ?? '',
              images: 'http://' + item?.baseAddress + item?.documentUrl,
            }))
          : [emptyCertification],
    });
  }, [doctorVerificationData, form]);

  return form;
};
