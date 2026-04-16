import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  DocumentTypeFormValues,
  DocumentTypeSchema,
} from './createDocumentType.schema';
import { useEffect } from 'react';

export const useDocumentTypeForm = (initialValues: DocumentTypeFormValues) => {
  const form = useForm<DocumentTypeFormValues>({
    resolver: zodResolver(DocumentTypeSchema),
    defaultValues: {
      name: '',
      documentType: '',
      isActive: true,
    },
    mode: 'onSubmit', // or 'onChange'
  });

  useEffect(() => {
    if (initialValues) {
      form.reset({
        ...initialValues,
        documentType: String(initialValues?.documentType),
      });
    }
  }, [initialValues, form]);

  return form;
};
