export interface UpgradeTenantSchema {
  tenant: string;
  extendedExpiryDate: string;
}

import { z } from 'zod';

export const UpgradeTenantSchema = z.object({
  tenant: z.string().min(1, 'Tenant is required'), // must be non-empty string
  extendedExpiryDate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), 'Date is Required'),
});

// TypeScript type inference
export type UpgradeTenantSchemaFormValues = z.infer<typeof UpgradeTenantSchema>;

export interface UpgradeTenantProps {
  tenantId: string;
  onClose: () => void;
}
