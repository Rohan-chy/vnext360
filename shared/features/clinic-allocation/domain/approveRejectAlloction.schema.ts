import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const approveRejectAllocationSchema = z
  .object({
    doctorClinicAllocationId: z.string().uuid('Invalid ID'),
    cancellationReason: z.string().optional(),
    isApproved: z.boolean().optional(),
  })
  .refine(
    (data) => {
      // If rejecting, message must exist
      if (data.isApproved === false) {
        return !!data.cancellationReason?.trim();
      }
      return true;
    },
    {
      message: 'Reason is required',
      path: ['cancellationReason'],
    }
  );

export type ApproveRejectAllocationFormValues = z.infer<
  typeof approveRejectAllocationSchema
>;

export const useApproveRejectAllocationForm = (initialValues?: any) => {
  const form = useForm<ApproveRejectAllocationFormValues>({
    resolver: zodResolver(approveRejectAllocationSchema),
    defaultValues: {
      doctorClinicAllocationId: '',
      cancellationReason: '',
      isApproved: false,
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (initialValues?.id) {
      form.setValue('doctorClinicAllocationId', initialValues.id);
      form.setValue('cancellationReason', initialValues.cancellationReason);
    }
  }, [initialValues, form]);

  return form;
};
