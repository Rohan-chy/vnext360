import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const WardSchema = z.object({
  id: z.string().optional(),
  municipalityId: z.string().uuid('Country is required'),
  wardNumber: z
    .number()
    .int('Ward must be an integer')
    .nonnegative('Ward must be >= 0'),
  isActive: z.boolean().optional(),
});

export type WardFormData = z.infer<typeof WardSchema>;

export const useWardForm = (initialValues?: WardFormData) => {
  const form = useForm<WardFormData>({
    resolver: zodResolver(WardSchema),
    defaultValues: {
      municipalityId: '',
      wardNumber: 0,
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
