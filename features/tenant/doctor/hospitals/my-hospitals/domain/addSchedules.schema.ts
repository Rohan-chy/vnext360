import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { DoctorHospitalRequestResponse } from './doctorHospitalResponse';
import { useEffect } from 'react';
import { useGetDoctorProfile } from '../../../profile/application/usecases/useGetDoctorProfile';

export const addScheduleSchema = z
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

export type AddScheduleFormValues = z.infer<typeof addScheduleSchema>;

export const useAddScheduleForm = (
  hospital?: DoctorHospitalRequestResponse
) => {
  const { data: profile }: Record<string, any> = useGetDoctorProfile();

  const form = useForm<AddScheduleFormValues>({
    // resolver: zodResolver(addScheduleSchema),
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
    mode: 'onSubmit', // or 'onChange'
  });

  useEffect(() => {
    if (hospital?.id) {
      form.setValue('doctorId', profile?.id);
      form.setValue('clinicId', hospital.id);
      form.setValue('clinicName', hospital.name);
    }
  }, [hospital, form]);

  return form;
};

export interface CreateClinicAllocationFormProps {
  initialValues?: AddScheduleFormValues;
  onClose?: () => void;
}
