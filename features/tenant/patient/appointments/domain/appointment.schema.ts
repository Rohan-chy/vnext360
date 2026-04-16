export type AppointmentStatus = 'UPCOMING' | 'PAST' | 'CANCELLED';

export interface Appointment {
  id: string;
  doctorName: string;
  specialization: string;
  date: string; // ISO string
  patientName: string;
  status: AppointmentStatus;
}

import { z } from 'zod';

export const bookAppointmentSchema = z.object({
  patientId: z.string().uuid(),
  doctorClinicAllocationId: z.string().uuid(),

  paymentOptions: z.number(),
  paymentStatus: z.number(),
  bookingStatus: z.number(),

  status: z.string(),

  fee: z.number().min(0),

  rescheduleReason: z.string().optional(),

  prefix: z.string().optional(),
  current: z.number().optional(),
  suffix: z.string().optional(),
});

export type BookAppointmentInput = z.infer<typeof bookAppointmentSchema>;

export const rescheduleSchema = z.object({
  appointmentId: z.string().uuid(),
  newDate: z.string().min(1, 'Date is required'),
  newTimeSlot: z.string().min(1, 'Time slot is required'),
  rescheduleReason: z.string().min(3, 'Reason is required'),
});

export type RescheduleInput = z.infer<typeof rescheduleSchema>;
