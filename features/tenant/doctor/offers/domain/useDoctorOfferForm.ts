import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { doctorOfferSchema, DoctorOfferFormValues } from './doctorOffer.schema';

export const useDoctorOfferForm = (defaultData?: DoctorOfferFormValues) => {
  const form = useForm<DoctorOfferFormValues>({
    resolver: zodResolver(doctorOfferSchema),
    defaultValues: defaultData || {
      title: '',
      description: '',
      discountPercent: 0,
      validFrom: '',
      validTo: '',
      applicableServices: [],
      isActive: true,
    },
    mode: 'onChange',
  });

  return { form };
};
