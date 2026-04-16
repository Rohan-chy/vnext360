import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const OrganizationRegistrationSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full Name must be at least 2 characters')
    .max(100, 'Full Name must be at most 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Full Name can only contain letters and spaces'),

  countryCode: z.string().min(1, 'Country code is required'),

  mobileNumber: z
    .string()
    .min(10, 'Mobile Number must be at least 10 digits')
    .max(15, 'Mobile Number must be at most 15 digits')
    .regex(/^\d+$/, 'Mobile Number must contain only digits'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(32, 'Password must be at most 32 characters'),

  receiveOffers: z.boolean().optional(),
});

export type OrganizationRegistrationFormValues = z.infer<
  typeof OrganizationRegistrationSchema
>;

export const useOrganizationRegistrationForm = () => {
  const form = useForm<OrganizationRegistrationFormValues>({
    resolver: zodResolver(OrganizationRegistrationSchema),
    defaultValues: {
      fullName: '',
      countryCode: '+977',
      mobileNumber: '',
      password: '',
    },
    mode: 'onSubmit', // or 'onChange'
  });

  return form;
};
