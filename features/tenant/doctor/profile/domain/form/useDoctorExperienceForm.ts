import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  DoctorExperienceFormSchema,
  DoctorExperienceFormValues,
} from '../schema/DoctorExperience.schema';
import { emptyExperience } from '../doctorFormDefaults';

export const useDoctorExperienceForm = (verifyDoctorData?: any) => {
  const DEFAULT_UUID = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const form = useForm<DoctorExperienceFormValues>({
    // resolver: zodResolver(DoctorExperienceFormSchema),
    defaultValues: {
      doctorExperiences: [emptyExperience],
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (!verifyDoctorData) return;

    form.reset({
      doctorExperiences:
        verifyDoctorData?.doctorExperiences?.length > 0
          ? verifyDoctorData.doctorExperiences.map((item: any) => ({
              id: item?.id ?? DEFAULT_UUID,
              instituteName: item?.instituteName ?? '',
              joinDate: item?.joinDate ?? '',
              completionDate: item?.completionDate ?? '',
              remarks: item?.remarks ?? '',
              dynamicDocumentTypeId: item?.dynamicDocumentTypeId ?? '',
              documentUrl: item?.documentUrl ?? '',
              images: 'http://' + item?.baseAddress + item?.documentUrl,
            }))
          : [emptyExperience],
    });
  }, [verifyDoctorData, form]);

  return form;
};
