import { useForm } from 'react-hook-form';
import {
  uploadDoctorCategoryImageFormValues,
  uploadDoctorCategoryImageSchema,
} from './uploadDoctorCategoryImage.schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const uploadDoctorCategoryImageForm = () => {
  const form = useForm<uploadDoctorCategoryImageFormValues>({
    resolver: zodResolver(uploadDoctorCategoryImageSchema),
    defaultValues: {
      doctorCategoryId: '',
      image: '',
    },
  });
  return form;
};
