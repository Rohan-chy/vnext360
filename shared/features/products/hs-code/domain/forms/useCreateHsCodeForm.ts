import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { hsCodeSchema } from '../schema/createHscode.schema';
import { hsCodeResponseItem } from '../schema/hsCodeResponse.schema';
import { useEffect } from 'react';

export type hsCodeFormValues = z.infer<typeof hsCodeSchema>;

export const useHsCodeForm = (initialValues?: hsCodeResponseItem) => {
  const form = useForm<hsCodeFormValues>({
    resolver: zodResolver(hsCodeSchema),
    defaultValues: {
      productId: '',
      hsCode: '',
      description: '',
      activateDate: '',
      isActive: true,
    },
  });

  useEffect(() => {
    form.reset(initialValues);
  }, [initialValues]);

  return form;
};
