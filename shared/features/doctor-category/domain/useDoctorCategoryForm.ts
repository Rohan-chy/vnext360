import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  categorySchema,
  categorySchemaFormValues,
  updateCategorySchema,
  updateCategorySchemaFormValues,
} from './doctorCategory.schema';

type FormValues = categorySchemaFormValues | updateCategorySchemaFormValues;

export const useDoctorCategoryForm = (initialValues?: FormValues) => {
  const schema =
    initialValues && 'id' in initialValues
      ? updateCategorySchema
      : categorySchema;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: '',
      categoryName: '',
      description: '',
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
