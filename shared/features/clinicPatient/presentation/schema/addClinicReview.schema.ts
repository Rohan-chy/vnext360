import { z } from 'zod';

export const addClinicReviewSchema = z.object({
  review: z
    .string()
    .min(1, 'Please enter your review.')
    .min(5, 'Review must be at least 5 characters')
    .max(500, 'Review cannot exceed 500 characters'),
});

export type AddClinicReviewSchema = z.infer<typeof addClinicReviewSchema>;
