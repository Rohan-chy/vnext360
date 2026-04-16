import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { uploadClinicBulkImageSchema } from '../schemas/uploadClinicBulkImages.schema';
import z from 'zod';

export type uploadClinicBulkImageFormValues = z.infer<
  typeof uploadClinicBulkImageSchema
>;

export const uploadClinicBulkImageForm = () => {
  const form = useForm<uploadClinicBulkImageFormValues>({
    resolver: zodResolver(uploadClinicBulkImageSchema),
    defaultValues: {
      clinicId: '',
      image: [], // default as empty array for multiple files
    },
  });
  return form;
};
