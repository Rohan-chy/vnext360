import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  SalutationFormValues,
  salutationSchema,
} from './createSalutation.schema';

export const useSalutationForm = () => {
  const form = useForm<SalutationFormValues>({
    resolver: zodResolver(salutationSchema),
    defaultValues: {
      name: '',
      description: '',
    },
    mode: 'onSubmit', // or 'onChange'
  });

  return form;
};
