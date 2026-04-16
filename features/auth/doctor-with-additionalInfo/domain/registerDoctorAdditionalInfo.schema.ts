import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const DoctorRegistrationAdditionalInfoSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(20, 'Title must be at most 20 characters'),

  firstName: z
    .string()
    .min(2, 'First Name must be at least 2 characters')
    .max(50, 'First Name must be at most 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'First Name can only contain letters and spaces'),

  middleName: z
    .string()
    .max(50, 'Middle Name must be at most 50 characters')
    .regex(/^[a-zA-Z\s]*$/, 'Middle Name can only contain letters and spaces')
    .optional()
    .or(z.literal('')),

  lastName: z
    .string()
    .min(2, 'Last Name must be at least 2 characters')
    .max(50, 'Last Name must be at most 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Last Name can only contain letters and spaces'),

  gender: z.string(),

  countryCode: z.string().min(1, 'Country code is required'),

  contactNumber: z
    .string()
    .length(10, 'Contact Number must be 10 digits')
    .regex(/^\d+$/, 'Contact Number must contain only digits'),

  email: z.string().min(1, 'Email is required').email('Invalid email address'),

  userName: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must be at most 50 characters'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(32, 'Password must be at most 32 characters'),
});

export type DoctorRegistrationAdditionalFormValues = z.infer<
  typeof DoctorRegistrationAdditionalInfoSchema
>;

export const useDoctorRegistrationAdditionalInfoForm = () => {
  const form = useForm<DoctorRegistrationAdditionalFormValues>({
    resolver: zodResolver(DoctorRegistrationAdditionalInfoSchema),
    defaultValues: {
      title: '',
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '0',
      countryCode: '+977',
      contactNumber: '',
      email: '',
      userName: '',
      password: '',
    },
    mode: 'onChange', // or 'onChange'
  });

  return form;
};

export type RegisterAdditionalInfoPayload = Omit<
  DoctorRegistrationAdditionalFormValues,
  'gender'
> & { gender: number | null };
