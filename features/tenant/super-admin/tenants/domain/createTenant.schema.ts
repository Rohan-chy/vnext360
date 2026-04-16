import { z } from 'zod';

export const tenantSchema = z.object({
  id: z.string().min(1, 'Id is required'),
  name: z.string().min(2, 'Tenant name must be at least 2 characters'),
  adminEmail: z.string().email('Invalid admin email'),
  adminPassword: z.string().min(6, 'Password must be at least 6 characters'),
  issuer: z.string().optional(),
});

export type TenantFormValues = z.infer<typeof tenantSchema>;
