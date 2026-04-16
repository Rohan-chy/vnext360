import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// Zod schema
export const pageSchema = z.object({
  id: z.string().optional(), // optional if updating existing page

  name: z.string().min(1, 'Page name is required'),

  slug: z
    .string()
    .min(1, 'Slug is required')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be URL-friendly'),

  htmlContent: z.string().optional(),

  cssContent: z.string().optional(),

  grapesData: z.string().min(1, 'GrapesJS project data is required'),

  isPublished: z.boolean(),
});

// Type inferred from Zod schema
export type CreatePageFormValues = z.infer<typeof pageSchema>;

// Hook for React Hook Form
export const useCreatePageForm = () => {
  const form = useForm<CreatePageFormValues>({
    resolver: zodResolver(pageSchema),
    defaultValues: {
      name: '',
      slug: '',
      htmlContent: '',
      cssContent: '',
      grapesData: '',
      isPublished: false,
    },
    mode: 'onSubmit',
  });

  return form;
};
