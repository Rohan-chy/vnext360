import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { emptyTraining } from '../doctorFormDefaults';
import {
  DoctorTrainingFormSchema,
  DoctorTrainingFormValues,
} from '../schema/doctorTraining.schema';

export const useDoctorTrainingForm = (verifyDoctorData?: any) => {
  const DEFAULT_UUID = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const form = useForm<DoctorTrainingFormValues>({
    // resolver: zodResolver(DoctorTrainingFormSchema),
    defaultValues: {
      doctorTrainings: [emptyTraining],
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (!verifyDoctorData) return;

    form.reset({
      doctorTrainings:
        verifyDoctorData?.doctorTrainings?.length > 0
          ? verifyDoctorData.doctorTrainings.map((item: any) => ({
              id: item?.id ?? DEFAULT_UUID,
              trainingTitle: item?.trainingTitle ?? '',
              durationInMonths: item?.durationInMonths ?? 0,
              yearOfCompletion: item?.yearOfCompletion ?? 0,
              completedFromInstitute: item?.completedFromInstitute ?? '',
              remarks: item?.remarks ?? '',
              dynamicDocumentTypeId: item?.dynamicDocumentTypeId ?? '',
              documentUrl: item?.documentUrl ?? '',
              images: 'http://' + item?.baseAddress + item?.documentUrl,
            }))
          : [emptyTraining],
    });
  }, [verifyDoctorData, form]);

  return form;
};
