import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  DoctorProfessionalFormValues,
  DoctorProfessionalSchema,
} from '../schema/doctorProfession.schema';
import { useEffect } from 'react';

export const useDoctorProfessionalForm = (doctorVerificationData?: any) => {
  const form = useForm<DoctorProfessionalFormValues>({
    resolver: zodResolver(DoctorProfessionalSchema),

    defaultValues: {
      doctorCategoryId: '',
      doctorSubCategoryId: '',
      registrationNumber: '',
      briefBio: '',
    },

    mode: 'onChange',
  });

  useEffect(() => {
    if (doctorVerificationData) {
      form.reset({
        doctorCategoryId: doctorVerificationData?.doctorCategoryId ?? '',

        doctorSubCategoryId: doctorVerificationData?.doctorSubCategoryId ?? '',

        registrationNumber:
          doctorVerificationData?.councilRegistrationNumber ?? '',

        briefBio: doctorVerificationData?.briefBio ?? '',
      });
    }
  }, [doctorVerificationData]);

  return form;
};
