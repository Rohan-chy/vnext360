import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { productAttributeItem } from './getProductAttribute.schema';

export const ProductAttributeSchema = z.object({
  id: z.string().optional(),

  name: z.string().min(1, 'Name is required'),
});

export type CreateProductAttributeFormValues = z.infer<
  typeof ProductAttributeSchema
>;

export const useCreateClinicForm = (initialValues?: productAttributeItem) => {
  const form = useForm<CreateProductAttributeFormValues>({
    resolver: zodResolver(ProductAttributeSchema),
    defaultValues: {
      id: '',
      name: '',
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
    }
  }, [initialValues, form]);

  return form;
};

export interface CreateProductAttributeFormProps {
  initialValues?: productAttributeItem;
  onClose?: () => void;
}
