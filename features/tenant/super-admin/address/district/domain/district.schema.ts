import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const DistrictSchema = z.object({
  id: z.string().optional(),
  stateId: z.string().uuid('Country is required'),
  name: z.string().min(1, 'District name is required'),
  sortingId: z
    .number()
    .int('Sorting ID must be an integer')
    .nonnegative('Sorting ID must be >= 0'),
  isActive: z.boolean().optional(),
});

export type DistrictFormData = z.infer<typeof DistrictSchema>;

export const useDistrictForm = (initialValues?: DistrictFormData) => {
  const form = useForm<DistrictFormData>({
    resolver: zodResolver(DistrictSchema),
    defaultValues: {
      stateId: '',
      name: '',
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
