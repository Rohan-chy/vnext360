import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  DoctorResearchFormValues,
  DoctorResearchFormSchema,
} from '../schema/doctorResearch.schema';
import { emptyResearch } from '../doctorFormDefaults';

export const useDoctorResearchForm = (verifyDoctorData?: any) => {
  const DEFAULT_UUID = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const form = useForm<DoctorResearchFormValues>({
    // resolver: zodResolver(DoctorResearchFormSchema),
    defaultValues: {
      doctorResearches: [emptyResearch],
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (!verifyDoctorData) return;

    form.reset({
      doctorResearches:
        verifyDoctorData?.doctorResearches?.length > 0
          ? verifyDoctorData.doctorResearches.map((item: any) => ({
              id: item?.id ?? DEFAULT_UUID,
              researchTitle: item?.researchTitle ?? '',
              yearOfCompletion:
                item?.yearOfCompletion ?? new Date().getFullYear(),
              researchOutcome: item?.researchOutcome ?? '',
              remarks: item?.remarks ?? '',
              dynamicDocumentTypeId: item?.dynamicDocumentTypeId ?? '',
              documentUrl: item?.documentUrl ?? '',
              images: 'http://' + item?.baseAddress + item?.documentUrl,
            }))
          : [emptyResearch],
    });
  }, [verifyDoctorData, form]);

  return form;
};
