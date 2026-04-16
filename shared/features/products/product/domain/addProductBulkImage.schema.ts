import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const addProductBulkImageSchema = z.object({
  productId: z.string().uuid('Invalid Product ID'),
  image: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file instanceof File, { message: 'Invalid file' })
    )
    .optional()
    .or(z.undefined()),
});

export type addProductBulkImageFormValues = z.infer<
  typeof addProductBulkImageSchema
>;

export const uploadClinicBulkImageForm = () => {
  const form = useForm<addProductBulkImageFormValues>({
    resolver: zodResolver(addProductBulkImageSchema),
    defaultValues: {
      productId: '',
      image: [], // default as empty array for multiple files
    },
  });
  return form;
};
