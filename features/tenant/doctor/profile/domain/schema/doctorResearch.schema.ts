// doctorResearch.schema.ts
import { z } from 'zod';

export const DoctorResearchSchema = z.object({
  id: z.string().uuid().optional(),

  researchTitle: z.string().min(1, 'Research title is required'),

  yearOfCompletion: z.number().int().min(1900, 'Invalid year').optional(),

  researchOutcome: z.string().min(1, 'Research outcome is required'),

  remarks: z.string().optional(),

  dynamicDocumentTypeId: z.string().optional(),

  documentUrl: z.string().optional(),
});

export const DoctorResearchFormSchema = z.object({
  doctorResearches: z
    .array(DoctorResearchSchema)
    .min(1, 'At least one research record is required'),
});

export type DoctorResearchFormValues = z.infer<typeof DoctorResearchFormSchema>;

export type SaveResearchPayload = {
  data: z.infer<typeof DoctorResearchSchema>[];
};
