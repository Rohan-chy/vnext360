import { useForm } from 'react-hook-form';
import {
  UpdateDoctorFormValues,
  updateDoctorSchema,
} from '../schema/updateDoctor.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

export const useUpdateDoctorForm = (
  doctorProfileData?: UpdateDoctorFormValues
) => {
  const form = useForm<UpdateDoctorFormValues>({
    resolver: zodResolver(updateDoctorSchema),
    defaultValues: {
      title: '',
      firstName: '',
      middleName: '',
      lastName: '',
      gender: 0,
      dateOfBirth: new Date().toISOString().split('T')[0],
      dateOfBirthNp: '',
      countryCode: '+977',
      contactNumber: '',
      email: '',
      userName: '',
      password: '',
      image: null,
    },
    mode: 'onSubmit', // or 'onChange'
  });

  useEffect(() => {
    if (doctorProfileData?.id) {
      form.reset(doctorProfileData);
    }
  }, [doctorProfileData?.id]);

  return form;
};
