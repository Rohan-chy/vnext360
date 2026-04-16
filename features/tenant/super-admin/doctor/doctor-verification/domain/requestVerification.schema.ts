import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const DoctorProfileVerificationFormSchema = z.object({
  doctorVerificationId: z.string().uuid({ message: 'Invalid UUID' }),
  isVerified: z.boolean(),
  rejectionReason: z.string().optional(), // optional if verification passes
});

// TypeScript type
export type DoctorProfileVerificationFormValues = z.infer<
  typeof DoctorProfileVerificationFormSchema
>;

// Hook to initialize form
export const useDoctorProfileVerificationForm = (
  defaultValues?: Partial<DoctorProfileVerificationFormValues> & { id?: string }
) => {
  const form = useForm<DoctorProfileVerificationFormValues>({
    resolver: zodResolver(DoctorProfileVerificationFormSchema),
    defaultValues: {
      doctorVerificationId: defaultValues?.id || '', // map `id` to `doctorVerificationId`
      isVerified: defaultValues?.isVerified ?? true,
      rejectionReason: defaultValues?.rejectionReason || '',
    },
  });

  return form;
};
