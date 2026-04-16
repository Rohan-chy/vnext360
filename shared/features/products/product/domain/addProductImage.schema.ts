import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const addProductImageSchema = z.object({
  id: z.string().optional(),
  productId: z.string().uuid('Invalid DoctorCategory ID'),
  image: z
    .any()
    .refine((file) => file instanceof File || file === undefined, {
      message: 'Invalid file',
    })
    .optional(),
});

export type addProductImageFormValues = z.infer<typeof addProductImageSchema>;

export const useAddProductImageForm = () => {
  const form = useForm<addProductImageFormValues>({
    resolver: zodResolver(addProductImageSchema),
    defaultValues: {
      productId: '',
      image: '',
    },
  });
  return form;
};
