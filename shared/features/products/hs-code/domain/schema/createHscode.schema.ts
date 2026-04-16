import { z } from 'zod';

export const hsCodeSchema = z.object({
  id: z.string().optional(),

  productId: z.string().uuid('Product is required'),

  hsCode: z.string().min(1, 'HS Code is required'),

  description: z.string().optional(),

  isActive: z.boolean().optional(),

  activateDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date',
  }),
});
