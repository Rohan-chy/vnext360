import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const NumberSettingSchema = z.object({
  id: z.string().optional(),
  prefix: z.string().min(0, 'Prefix must be a string'),
  startingNumber: z.number().int().min(0, 'Starting number must be >= 0'),
  currentNumber: z.number().int().min(0, 'Current number must be >= 0'),
  suffix: z.string().min(0, 'Suffix must be a string'),
});

export type CreateNumberSettingFormValues = z.infer<typeof NumberSettingSchema>;

export const useCreateNumberSettingForm = () => {
  const form = useForm<CreateNumberSettingFormValues>({
    resolver: zodResolver(NumberSettingSchema),
    defaultValues: {
      prefix: '',
      startingNumber: 0,
      currentNumber: 0,
      suffix: '',
    },
    mode: 'onSubmit',
  });

  return form;
};

export interface CreateNumberSettingFormProps {
  initialValues?: CreateNumberSettingFormValues;
  onClose?: () => void;
}
