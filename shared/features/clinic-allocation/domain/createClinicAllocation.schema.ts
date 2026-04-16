import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const clinicAllocationSchema = z
  .object({
    id: z.string().optional(),

    doctorId: z.string().uuid('Invalid doctor ID'),

    doctorName: z.string().min(1, 'Doctor name is required'),

    clinicId: z.string().uuid('Invalid clinic ID'),

    clinicName: z.string().min(1, 'Clinic name is required'),

    scheduleDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, 'Schedule date must be YYYY-MM-DD'),

    scheduleTimeFrom: z.string(),

    scheduleTimeTo: z.string(),

    maxPatientCap: z
      .number()
      .int('Patient cap must be an integer')
      .min(1, 'Patient cap must be at least 1'),

    quotedFee: z.number().min(0, 'Quoted fee cannot be negative'),
    isApproved: z.boolean().optional(),
  })
  .refine((data) => data.scheduleTimeFrom < data.scheduleTimeTo, {
    message: 'End time must be later than start time',
    path: ['scheduleTimeTo'],
  });

export type CreateClinicAllocationFormValues = z.infer<
  typeof clinicAllocationSchema
>;

export const useCreateClinicForm = (
  initialValues?: CreateClinicAllocationFormValues,
  clinicProfile?: any
) => {
  const form = useForm<CreateClinicAllocationFormValues>({
    resolver: zodResolver(clinicAllocationSchema),
    defaultValues: {
      doctorId: '',
      doctorName: '',
      clinicId: '',
      clinicName: '',
      scheduleDate: '',
      scheduleTimeFrom: '',
      scheduleTimeTo: '',
      maxPatientCap: 1,
      quotedFee: 0,
      isApproved: false,
    },
    mode: 'onSubmit',
  });

  // Reset with initial values (edit case)
  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
    }
  }, [initialValues, form]);

  // Set clinicId from clinicProfile
  useEffect(() => {
    if (clinicProfile?.clinicId) {
      form.setValue('clinicId', clinicProfile.clinicId);
      form.setValue('clinicName', clinicProfile.name);
    }
  }, [clinicProfile, form]);

  return form;
};

export interface CreateClinicAllocationFormProps {
  initialValues?: CreateClinicAllocationFormValues;
  onClose?: () => void;
}
