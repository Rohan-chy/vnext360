import { BookingStatus, PaymentStatus } from '@/shared/enums/enumData';

export interface Appointment {
  doctorClinicAllocationId: string; // backend GUID
  fee: number;
  paymentOptions: PaymentOptions;
  paymentStatus: PaymentStatus;
  bookingStatus: BookingStatus;
  // Optional: add patientId, appointmentDate, time etc. if required by your UI
  // patientId?: string;
  // appointmentDate?: string;
  // appointmentTime?: string;
}
