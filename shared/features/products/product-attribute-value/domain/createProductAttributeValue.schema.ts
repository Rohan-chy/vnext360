import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ProductAttributeValue } from './getProductAttributeValue.schema';

export const ProductAttributeValueSchema = z.object({
  id: z.string().optional(),

  productAttributeId: z.string().min(1, 'Name is required'),
  value: z.string().min(1, 'Value is required'),
});

export type CreateProductAttributeValueFormValues = z.infer<
  typeof ProductAttributeValueSchema
>;

export const useCreateProductAttributeValueForm = (
  initialValues?: ProductAttributeValue
) => {
  const form = useForm<CreateProductAttributeValueFormValues>({
    resolver: zodResolver(ProductAttributeValueSchema),
    defaultValues: {
      id: '',
      productAttributeId: '',
      value: '',
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

export interface CreateProductAttributeValueFormProps {
  initialValues?: ProductAttributeValue;
  onClose?: () => void;
}
