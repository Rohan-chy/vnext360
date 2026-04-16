import { z } from 'zod';

export const updateDoctorSchema = z.object({
  id: z.string().optional(),
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

  gender: z.number(),

  dateOfBirth: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date',
    })
    .refine(
      (date) => {
        const birthDate = new Date(date);
        const today = new Date();

        const age =
          today.getFullYear() -
          birthDate.getFullYear() -
          (today <
          new Date(
            today.getFullYear(),
            birthDate.getMonth(),
            birthDate.getDate()
          )
            ? 1
            : 0);

        return age >= 18;
      },
      {
        message: 'Doctor must be at least 18 years old',
      }
    ),

  dateOfBirthNp: z.string().min(1, 'Date of Birth (NP) is required'),

  countryCode: z.string().min(1, 'Country code is required'),

  contactNumber: z
    .string()
    .min(10, 'Contact Number must be at least 10 digits')
    .max(15, 'Contact Number must be at most 15 digits')
    .regex(/^\d+$/, 'Contact Number must contain only digits'),

  email: z.string().min(1, 'Email is required').email('Invalid email address'),

  userName: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must be at most 50 characters')
    .optional(),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(32, 'Password must be at most 32 characters')
    .optional(),
  image: z
    .union([z.instanceof(File), z.string()])
    .optional()
    .nullable(),
});

export type UpdateDoctorFormValues = z.infer<typeof updateDoctorSchema>;

export type UpdateDoctorPayload = Omit<UpdateDoctorFormValues, 'gender'> & {
  gender: number | null;
};
