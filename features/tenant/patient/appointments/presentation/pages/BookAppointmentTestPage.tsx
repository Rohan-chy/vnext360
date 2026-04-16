'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// import { useBookAppointment } from '../application/useBookAppointment';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { Combobox } from '@/components/custom-components/combobox';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';

import { useRouter } from 'next/navigation';
import {
  BookAppointmentInput,
  bookAppointmentSchema,
} from '../../domain/appointment.schema';
import { Form } from '@/components/ui/form';
import { FormTextArea } from '@/components/extended/form-textarea';

export default function BookAppointmentPage() {
  const router = useRouter();

  const form = useForm<BookAppointmentInput>({
    resolver: zodResolver(bookAppointmentSchema),
    defaultValues: {
      paymentOptions: 1,
      paymentStatus: 0,
      bookingStatus: 0,
      status: 'BOOKED',
      fee: 0,
    },
  });

  const onSubmit = (data: BookAppointmentInput) => {
    console.log(data);
  };

  return (
    <div className="p-2 space-y-2">
      <h1 className="text-xl font-semibold">Book Appointments</h1>

      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle>Book Appointment</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Doctor Clinic Allocation */}
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
                items={[
                  { label: 'New', value: 0 },
                  { label: 'Confirmed', value: 1 },
                ]}
              />

              {/* Fee */}
              <FloatingLabelFormInput
                form={form}
                name="fee"
                label="Consultation Fee"
                type="number"
              />

              {/* Prefix */}
              <FloatingLabelFormInput
                form={form}
                name="prefix"
                label="Prefix"
              />

              {/* Current */}
              <FloatingLabelFormInput
                form={form}
                name="current"
                label="Current Number"
                type="number"
              />

              {/* Suffix */}
              <FloatingLabelFormInput
                form={form}
                name="suffix"
                label="Suffix"
              />

              {/* Status */}
              <FloatingLabelFormInput
                form={form}
                name="status"
                label="Status"
              />

              {/* Reschedule Reason (Optional) */}
              <div className="md:col-span-2">
                <FormTextArea
                  form={form}
                  name="rescheduleReason"
                  label="Reschedule Reason (Optional)"
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-end gap-2">
                <Button type="submit" className="bg-blue-900">
                  {/* {isPending ? 'Booking...' : 'Confirm Appointment'} */}
                  Submit
                </Button>
                <Button
                  onClick={() => router.push('/patient/appointments')}
                  type="button"
                  variant="outline"
                >
                  {/* {isPending ? 'Booking...' : 'Confirm Appointment'} */}
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
