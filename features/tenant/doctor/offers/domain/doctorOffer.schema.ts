import { z } from 'zod';

export const doctorOfferSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Offer title is required'),
  description: z.string().min(5, 'Description must be at least 5 characters'),
  discountPercent: z
    .number()
    .min(1, 'Discount must be at least 1%')
    .max(100, 'Discount cannot exceed 100%'),
  validFrom: z.string().min(1, 'Start date is required'),
  validTo: z.string().min(1, 'End date is required'),
  applicableServices: z.array(z.string()).min(1, 'Select at least one service'),
  isActive: z.boolean().optional(),
});

export type DoctorOfferFormValues = z.infer<typeof doctorOfferSchema>;
