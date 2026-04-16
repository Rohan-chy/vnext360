import { z } from 'zod';

export const scheduleItemSchema = z.object({
  id: z.string().optional(),
  daysOfWeek: z
    .number()
    .int('Days of week must be an integer')
    .min(0, 'Days of week cannot be less than 0')
    .max(6, 'Days of week cannot be more than 6'), // 0=Sunday, 6=Saturday

  startTime: z
    .string()
    .min(1, 'Start time is required')
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Start time must be in HH:mm format'),

  endTime: z
    .string()
    .min(1, 'End time is required')
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'End time must be in HH:mm format'),
});

export const clinicScheduleSchema = z.object({
  clinicId: z.string().uuid('Clinic ID must be a valid UUID'),
  data: z.array(scheduleItemSchema).min(1, 'At least one schedule is required'),
});
