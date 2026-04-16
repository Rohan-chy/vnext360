import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const stateSchema = z.object({
  id: z.string().optional(),
  countryId: z.string().uuid('Country is required'),
  name: z.string().min(1, 'State name is required'),
  sortingId: z
    .number()
    .int('Sorting ID must be an integer')
    .nonnegative('Sorting ID must be >= 0'),
  isActive: z.boolean().optional(),
});

export type stateFormData = z.infer<typeof stateSchema>;

export const usestateForm = (initialValues?: stateFormData) => {
  const form = useForm<stateFormData>({
    resolver: zodResolver(stateSchema),
    defaultValues: {
      countryId: '',
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
