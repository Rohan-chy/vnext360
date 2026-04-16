import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const uploadDoctorImageSchema = z.object({
  doctorId: z.string().uuid('Invalid doctor ID'),
  image: z
    .any()
    .refine((file) => file instanceof File || file === undefined, {
      message: 'Invalid file',
    })
    .optional(),
});

export type uploadDoctorImageFormValues = z.infer<
  typeof uploadDoctorImageSchema
>;

export const uploadDoctorImageForm = () => {
  const form = useForm<uploadDoctorImageFormValues>({
    resolver: zodResolver(uploadDoctorImageSchema),
    defaultValues: {
      doctorId: '',
      image: '',
    },
  });
  return form;
};
