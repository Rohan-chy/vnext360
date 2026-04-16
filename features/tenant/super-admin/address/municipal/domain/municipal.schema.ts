import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const MunicipalSchema = z.object({
  id: z.string().optional(),
  districtId: z.string().uuid('Country is required'),
  name: z.string().min(1, 'Municipal name is required'),
  type: z.string().min(1, 'Municipal Type is required'),
  sortingId: z
    .number()
    .int('Sorting ID must be an integer')
    .nonnegative('Sorting ID must be >= 0'),
  isActive: z.boolean().optional(),
});

export type MunicipalFormData = z.infer<typeof MunicipalSchema>;

export const useMunicipalForm = (initialValues?: MunicipalFormData) => {
  const form = useForm<MunicipalFormData>({
    resolver: zodResolver(MunicipalSchema),
    defaultValues: {
      districtId: '',
      name: '',
      type: '',
      sortingId: 0,
      isActive: true,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
    }
  }, [initialValues, form]);

  return form;
};
