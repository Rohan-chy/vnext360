import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const PatientRegistrationSchema = z.object({
  name: z
    .string()
    .min(2, 'Full Name must be at least 2 characters')
    .max(100, 'Full Name must be at most 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Full Name can only contain letters and spaces'),

  countryCode: z.string().optional(),

  phoneNumber: z
    .string()
    .min(10, 'Mobile Number must be at least 10 digits')
    .max(15, 'Mobile Number must be at most 15 digits')
    .regex(/^\d+$/, 'Mobile Number must contain only digits'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(32, 'Password must be at most 32 characters'),

  sendOffers: z.boolean().optional(),
});

export type PatientRegistrationFormValues = z.infer<
  typeof PatientRegistrationSchema
>;

export const usePatientRegistrationForm = () => {
  const form = useForm<PatientRegistrationFormValues>({
    resolver: zodResolver(PatientRegistrationSchema),
    defaultValues: {
      name: '',
      countryCode: '+977',
      phoneNumber: '',
      password: '',
      sendOffers: true,
    },
    mode: 'onSubmit', // or 'onChange'
  });

  return form;
};
