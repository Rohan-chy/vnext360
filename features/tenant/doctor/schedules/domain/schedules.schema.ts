import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const DoctorScheduleSchema = z.object({
  id: z.string().optional(),

  clinicId: z.string().uuid('Clinic is required'),
  doctorId: z.string().optional(),

  scheduleDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date',
  }),

  scheduleTimeFrom: z.string().min(1, 'Start time is required'),

  scheduleTimeTo: z.string().min(1, 'End time is required'),

  maxPatientCap: z
    .number()
    .int('Must be an integer')
    .nonnegative('Must be >= 0'),

  quotedFee: z.number().nonnegative('Must be >= 0'),
  isApproved: z.boolean().optional(),
});

export type DoctorScheduleFormData = z.infer<typeof DoctorScheduleSchema>;

export const useDoctorScheduleForm = (
  initialValues?: DoctorScheduleFormData
) => {
  const form = useForm<DoctorScheduleFormData>({
    resolver: zodResolver(DoctorScheduleSchema),
    defaultValues: {
      clinicId: '',
      scheduleDate: new Date().toISOString().split('T')[0],
      scheduleTimeFrom: '',
      scheduleTimeTo: '',
      maxPatientCap: 0,
      quotedFee: 0,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
    }
  }, [initialValues, form]);

  return form;
};
