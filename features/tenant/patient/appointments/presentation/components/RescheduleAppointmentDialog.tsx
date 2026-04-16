'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Combobox } from '@/components/custom-components/combobox';
import { FormTextArea } from '@/components/extended/form-textarea';

import {
  BookAppointmentInput,
  bookAppointmentSchema,
} from '../../domain/appointment.schema';

interface Props {
  open: boolean;
  onClose: () => void;
  appointmentId: string;
  doctorClinicAllocationId: string;
  currentFee: number;
  onSubmitReschedule: (data: BookAppointmentInput) => void;
}

export default function RescheduleAppointmentDialog({
  open,
  onClose,
  appointmentId,
  doctorClinicAllocationId,
  currentFee,
  onSubmitReschedule,
}: Props) {
  const form = useForm<BookAppointmentInput>({
    resolver: zodResolver(bookAppointmentSchema),
    defaultValues: {
      doctorClinicAllocationId,
      paymentOptions: 1,
      paymentStatus: 0,
      bookingStatus: 0,
      status: 'RESCHEDULED',
      fee: currentFee,
      rescheduleReason: '',
    },
  });

  useEffect(() => {
    if (open) {
      form.reset({
        doctorClinicAllocationId,
        paymentOptions: 1,
        paymentStatus: 0,
        bookingStatus: 0,
        status: 'RESCHEDULED',
        fee: currentFee,
        rescheduleReason: '',
      });
    }
  }, [open, doctorClinicAllocationId, currentFee, form]);

  const handleSubmit = (data: BookAppointmentInput) => {
    onSubmitReschedule(data);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Reschedule Appointment</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4"
          >
            {/* Doctor & Clinic */}
            <Combobox
              form={form}
              name="doctorClinicAllocationId"
              label="Doctor & Clinic"
              items={[
                { label: 'Dr. Sarah - Clinic A', value: 'guid-1' },
                { label: 'Dr. Michael - Clinic B', value: 'guid-2' },
              ]}
            />

            {/* Payment Option */}
            <Combobox
              form={form}
              name="paymentOptions"
              label="Payment Option"
              items={[
                { label: 'Cash', value: 1 },
                { label: 'Online', value: 2 },
              ]}
            />

            {/* Payment Status */}
            <Combobox
              form={form}
              name="paymentStatus"
              label="Payment Status"
              items={[
                { label: 'Pending', value: 0 },
                { label: 'Paid', value: 1 },
              ]}
            />

            {/* Booking Status */}
            <Combobox
              form={form}
              name="bookingStatus"
              label="Booking Status"
              items={[{ label: 'Rescheduled', value: 2 }]}
            />

            {/* Fee */}
            <FloatingLabelFormInput
              form={form}
              name="fee"
              label="Consultation Fee"
              type="number"
            />

            {/* Prefix */}
            <FloatingLabelFormInput form={form} name="prefix" label="Prefix" />

            {/* Current */}
            <FloatingLabelFormInput
              form={form}
              name="current"
              label="Current Number"
              type="number"
            />

            {/* Suffix */}
            <FloatingLabelFormInput form={form} name="suffix" label="Suffix" />

            {/* Status */}
            <FloatingLabelFormInput
              form={form}
              name="status"
              label="Status"
              disabled
            />

            {/* Reschedule Reason */}
            <div className="md:col-span-2">
              <FormTextArea
                form={form}
                name="rescheduleReason"
                label="Reschedule Reason"
              />
            </div>

            <DialogFooter className="md:col-span-2 flex justify-end gap-2">
              <Button type="submit" className="bg-blue-900">
                Confirm Reschedule
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
