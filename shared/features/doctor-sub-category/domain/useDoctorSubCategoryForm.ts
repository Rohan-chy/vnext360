import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  subcategorySchema,
  subcategorySchemaFormValues,
  updatesubCategorySchema,
  updatesubCategorySchemaFormValues,
} from './doctorSubcategory.schema';

type FormValues =
  | subcategorySchemaFormValues
  | updatesubCategorySchemaFormValues;

export const useDoctorSubcategoryForm = (initialValues?: FormValues) => {
  const schema =
    initialValues && 'id' in initialValues
      ? updatesubCategorySchema
      : subcategorySchema;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: '',
      subCategoryName: '',
      description: '',
      doctorCategoryId: '',
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
