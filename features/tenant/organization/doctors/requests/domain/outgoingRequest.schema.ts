import { z } from 'zod';

// for create
export const outgoingRequestSchema = z.object({
  id: z.string().optional(),
  joiningDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid join date',
  }),
  designation: z.string().min(1, 'Designation is required'),
  doctorId: z.string().min(1, 'Hospital name is required'),
  remarks: z.string().optional(),
});

export type outgoingRequestSchemaFormValues = z.infer<
  typeof outgoingRequestSchema
>;

//for update
export const updateOutgoingRequestSchema = outgoingRequestSchema.extend({
  requestStatus: z.number(),
});

export type updateOutgoingRequestSchemaFormValues = z.infer<
  typeof updateOutgoingRequestSchema
>;
