import { z } from 'zod';

// for create
export const subcategorySchema = z.object({
  id: z.string().optional(),

  subCategoryName: z.string().min(1, 'Sub-category is required'),

  description: z.string().optional(),

  doctorCategoryId: z.string().min(1, 'Category is required'),
});

export type subcategorySchemaFormValues = z.infer<typeof subcategorySchema>;

// for update
export const updatesubCategorySchema = subcategorySchema.extend({
  id: z.string().min(1, 'Id is required'),
});

export type updatesubCategorySchemaFormValues = z.infer<
  typeof updatesubCategorySchema
>;
