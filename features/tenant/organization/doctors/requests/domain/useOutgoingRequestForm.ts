import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  outgoingRequestSchema,
  outgoingRequestSchemaFormValues,
  updateOutgoingRequestSchema,
  updateOutgoingRequestSchemaFormValues,
} from './outgoingRequest.schema';

type FormValues =
  | outgoingRequestSchemaFormValues
  | updateOutgoingRequestSchemaFormValues;

export const useOutgoingRequestForm = (initialValues?: FormValues) => {
  // Decide which schema to use
  const schema =
    initialValues && 'requestStatus' in initialValues
      ? updateOutgoingRequestSchema
      : outgoingRequestSchema;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: '',
      doctorId: '',
      designation: '',
      joiningDate: '',
      remarks: '',
      ...(initialValues && 'requestStatus' in initialValues
        ? { requestStatus: initialValues.requestStatus }
        : {}),
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
