import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { clinicSchema } from '../schemas/createClinic.schema';
import { useEffect } from 'react';
import { format } from 'date-fns';

export type CreateClinicFormValues = z.infer<typeof clinicSchema>;

export const useCreateClinicForm = (initialValues?: CreateClinicFormValues) => {
  const form = useForm<CreateClinicFormValues>({
    resolver: zodResolver(clinicSchema),
    defaultValues: {
      name: '',
      location: '',
      type: '',
      pan: '',
      contactNo: '',
      manager: '',
      registrationNumber: '',
      registrationDate: new Date().toISOString().split('T')[0],
      latitude: 27.7172, // Default to Kathmandu, Nepal
      longitude: 85.324, // Default to Kathmandu, Nepal
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset({
        ...initialValues,
        registrationDate:
          format(initialValues.registrationDate, 'yyyy-MM-dd') ?? '',
        latitude: initialValues.latitude ?? 27.7172,
        longitude: initialValues.longitude ?? 85.324,
      });
    }
  }, [initialValues, form]);

  return form;
};
