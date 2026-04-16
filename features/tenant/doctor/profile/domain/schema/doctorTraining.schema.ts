import { z } from 'zod';

export const DoctorTrainingSchema = z.object({
  id: z.string().uuid().optional(),

  trainingTitle: z.string().min(1, 'Training Title is required'),

  durationInMonths: z.number().int().min(1, 'Invalid number').optional(),

  yearOfCompletion: z.number().int().min(1900, 'Invalid year').optional(),

  completedFromInstitute: z.string().min(1, 'Institute Name is required'),

  remarks: z.string().optional(),

  dynamicDocumentTypeId: z
    .string()
    .uuid('Document Type is required')
    .optional(),

  documentUrl: z.string().optional(),
});

export const DoctorTrainingFormSchema = z.object({
  doctorTrainings: z
    .array(DoctorTrainingSchema)
    .min(1, 'At least one training is required'),
});

export type DoctorTrainingFormValues = z.infer<typeof DoctorTrainingFormSchema>;

export type SaveTrainingsPayload = {
  data: z.infer<typeof DoctorTrainingSchema>[];
};
