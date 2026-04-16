import { z } from 'zod';

// for create
export const categorySchema = z.object({
  id: z.string().optional(),

  categoryName: z.string().min(1, 'Category name is required'),

  description: z.string().optional(),
});

export type categorySchemaFormValues = z.infer<typeof categorySchema>;

// for update
export const updateCategorySchema = categorySchema.extend({
  id: z.string().min(1, 'Id is required'),
});

export type updateCategorySchemaFormValues = z.infer<
  typeof updateCategorySchema
>;
