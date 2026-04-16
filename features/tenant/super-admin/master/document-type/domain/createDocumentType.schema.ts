import { z } from 'zod';

export const DocumentTypeSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),

  documentType: z.string().min(1, 'Document is required'),
  isActive: z.boolean().optional(),
});

export type DocumentTypeFormValues = z.infer<typeof DocumentTypeSchema>;

export type CreateDocumentTypePayload = Omit<
  DocumentTypeFormValues,
  'documentType'
> & {
  documentType: number;
};
