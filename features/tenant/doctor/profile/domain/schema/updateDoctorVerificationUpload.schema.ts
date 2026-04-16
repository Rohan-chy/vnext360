import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const updateDoctorVerificationUploadSchema = z.object({
  doctorId: z.string().uuid('Invalid doctor ID'),
  dynamicDocumentTypeId: z.string().uuid('Invalid Document'),
  image: z
    .any()
    .refine((file) => file instanceof File || file === undefined, {
      message: 'Invalid file',
    })
    .optional(),
});

export type updateDoctorVerificationUploadFormValues = z.infer<
  typeof updateDoctorVerificationUploadSchema
>;

export const updateDoctorVerificationUploadForm = () => {
  const form = useForm<updateDoctorVerificationUploadFormValues>({
    resolver: zodResolver(updateDoctorVerificationUploadSchema),
    defaultValues: {
      doctorId: '',
      dynamicDocumentTypeId: '',
      image: undefined,
    },
  });
  return form;
};
