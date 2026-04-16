import { z } from 'zod';

export const DoctorBankDetailSchema = z.object({
  id: z.string().uuid().optional(),

  bankName: z.string().min(1, 'Bank name is required'),

  accountName: z.string().min(1, 'Account name is required'),

  accountNumber: z
    .string()
    .min(1, 'Account number is required')
    .regex(/^[0-9]+$/, 'Account number must contain only digits'),

  accountType: z.string().min(1, 'Account type is required'),
});

export const DoctorBankDetailsFormSchema = z.object({
  doctorBankDetails: z
    .array(DoctorBankDetailSchema)
    .min(1, 'At least one bank detail is required'),
});

export type DoctorBankDetailsFormValues = z.infer<
  typeof DoctorBankDetailsFormSchema
>;

export type SaveBankDetailsPayload = {
  data: z.infer<typeof DoctorBankDetailSchema>[];
};
