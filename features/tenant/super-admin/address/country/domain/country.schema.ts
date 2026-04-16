import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const countrySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Country name is required'),
  code: z.string().min(1, 'Country code is required'),
  dialingCode: z.string().min(1, 'Dialing code is required'),
  sortingId: z
    .int('Sorting ID must be an integer')
    .nonnegative('Sorting ID must be >= 0'),
  isActive: z.boolean().optional(),
});

export type CountryFormData = z.infer<typeof countrySchema>;

export const useCountryForm = (initialValues?: CountryFormData) => {
  const form = useForm<CountryFormData>({
    resolver: zodResolver(countrySchema),
    defaultValues: {
      name: '',
      code: '',
      dialingCode: '',
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
