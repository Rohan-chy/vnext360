import { z } from 'zod';

export const doctorAdvertisementSchema = z.object({
  title: z.string().min(1, 'Advertisement title is required'),
  description: z.string().min(5, 'Description must be at least 5 characters'),
  mediaUrl: z.string().url('Must be a valid URL').optional(),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  isActive: z.boolean(),
});

export type DoctorAdvertisementFormValues = z.infer<
  typeof doctorAdvertisementSchema
>;
