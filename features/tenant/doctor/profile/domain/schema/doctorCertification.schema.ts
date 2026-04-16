import { z } from 'zod';

export const DoctorCertificationSchema = z.object({
  id: z.string().uuid('Invalid ID').optional(),
  certificationDetails: z.string().min(1, 'Certification Title is required'),

  completionYear: z.number().min(1900, 'Invalid year'),

  completedFromInstitute: z.string().min(1, 'Institute Name is required'),

  remarks: z.string().optional(),

  dynamicDocumentTypeId: z.string().uuid('Document Type is required'),

  documentUrl: z.string().optional(),
});

export const DoctorEducationCertifySchema = z.object({
  doctorCertifications: z
    .array(DoctorCertificationSchema)
    .min(1, 'At least one certification is required'),
});

export type DoctorCertificationFormValues = z.infer<
  typeof DoctorEducationCertifySchema
>;

export type SaveCertificationsPayload = {
  data: z.infer<typeof DoctorCertificationSchema>[];
};
