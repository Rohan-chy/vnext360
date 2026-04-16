import z from 'zod';
import { updateClinicImageSchema } from '../schemas/updateClinicImage.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export type updateClinicImageFormValues = z.infer<
  typeof updateClinicImageSchema
>;

export const updateClinicImageForm = () => {
  const form = useForm<updateClinicImageFormValues>({
    resolver: zodResolver(updateClinicImageSchema),
    defaultValues: {
      clinicId: '',
      image: '',
    },
  });
  return form;
};
