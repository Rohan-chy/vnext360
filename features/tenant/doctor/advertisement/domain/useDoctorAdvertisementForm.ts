import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  doctorAdvertisementSchema,
  DoctorAdvertisementFormValues,
} from './doctorAdvertisement.schema';

export const useDoctorAdvertisementForm = (
  defaultData?: DoctorAdvertisementFormValues
) => {
  const form = useForm<DoctorAdvertisementFormValues>({
    resolver: zodResolver(doctorAdvertisementSchema),
    defaultValues: defaultData || {
      title: '',
      description: '',
      mediaUrl: '',
      startDate: '',
      endDate: '',
      isActive: true,
    },
    mode: 'onChange',
  });

  return { form };
};
