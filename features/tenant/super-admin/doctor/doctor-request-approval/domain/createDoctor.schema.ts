import { z } from 'zod';

export const createDoctorSchema = z
  .object({
    title: z.string().optional(),
    firstName: z.string().min(2, 'First Name is required'),
    middleName: z.string().optional(),
    lastName: z.string().min(2, 'Last Name is required'),
    gender: z.string().min(0).max(2, 'Select a valid gender'),
    dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date',
    }),
    dateOfBirthNp: z.string().optional(),
    countryCode: z.string().min(1, 'Country code is required'),
    contactNumber: z.string().min(10, 'Invalid contact number'),
    email: z.string().email('Invalid email'),
    userName: z.string().min(3, 'Username must be at least 3 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type CreateDoctorFormValues = z.infer<typeof createDoctorSchema>;

// api payload
export type CreateDoctorPayload = Omit<CreateDoctorFormValues, 'gender'> & {
  gender: number;
};

export interface CreateDoctorFormProps {
  initialValues?: CreateDoctorFormValues;
  onClose?: () => void;
}

export const genderItems = [
  { label: 'Select item', value: '' },
  { label: 'Male', value: '0' },
  { label: 'Female', value: '1' },
  { label: 'Others', value: '2' },
];
