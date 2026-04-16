import { z } from 'zod';

export const DoctorExperienceSchema = z.object({
  id: z.string().uuid().optional(),

  instituteName: z.string().min(1, 'Institute Name is required'),

  joinDate: z.string().min(1, 'Join Date is required'),

  completionDate: z.string().min(1, 'Completion Date is required'),

  remarks: z.string().optional(),

  dynamicDocumentTypeId: z.string().uuid('Document Type is required'),

  documentUrl: z.string().optional(),
});

export const DoctorExperienceFormSchema = z.object({
  doctorExperiences: z
    .array(DoctorExperienceSchema)
    .min(1, 'At least one experience is required'),
});

export type DoctorExperienceFormValues = z.infer<
  typeof DoctorExperienceFormSchema
>;

export type SaveExperiencesPayload = {
  data: z.infer<typeof DoctorExperienceSchema>[];
};
