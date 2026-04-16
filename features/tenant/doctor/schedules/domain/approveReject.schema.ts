import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const approveRejectSchema = z
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

export type ApproveRejectFormValues = z.infer<typeof approveRejectSchema>;

export const useApproveRejectScheduleForm = (initialValues?: any) => {
  const form = useForm<ApproveRejectFormValues>({
    resolver: zodResolver(approveRejectSchema),
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
