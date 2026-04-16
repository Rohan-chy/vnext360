import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

/* ---------- Main ProductCategory Schema ---------- */

export const ProductCategorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  categoryId: z
    .string()
    .nullable()
    .transform((val) => {
      if (!val || val.trim() === '') return null; // empty or whitespace → null
      return val;
    })
    .refine(
      (val) =>
        !val ||
        /^[0-9a-fA-F-]{8}-[0-9a-fA-F-]{4}-[1-5][0-9a-fA-F-]{3}-[89abAB][0-9a-fA-F-]{3}-[0-9a-fA-F-]{12}$/.test(
          val
        ),
      {
        message: 'Invalid ProductCategory category',
      }
    ),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
});

/* ---------- Types ---------- */

export type CreateProductCategoryFormValues = z.infer<
  typeof ProductCategorySchema
>;

/* ---------- Hook ---------- */

export const useCreateProductCategoryForm = (
  initialValues?: CreateProductCategoryFormValues
) => {
  const form = useForm<CreateProductCategoryFormValues>({
    resolver: zodResolver(ProductCategorySchema),
    defaultValues: {
      id: '',
      name: '',
      categoryId: null,
      description: '',
      isActive: false,
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

/* ---------- Props ---------- */

export const ExtendedProductCategorySchema = ProductCategorySchema.extend({
  categoryName: z.string(),
});

export type ExtendedProductCategoryFormValues = z.infer<
  typeof ExtendedProductCategorySchema
>;

export interface CreateProductCategoryFormProps {
  initialValues?: CreateProductCategoryFormValues;
  onClose?: () => void;
  ProductCategory?: ExtendedProductCategoryFormValues[];
}
