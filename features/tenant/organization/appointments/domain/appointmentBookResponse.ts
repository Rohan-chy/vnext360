export type AppointmentItem = {
  paymentOptions: number;
  paymentStatus: number;
  bookingStatus: number;

  patientId: string;
  doctorClinicAllocationId: string;

  status: string;

  fee: number;
  quotedFee: number;

  doctorName: string;
  patientName: string;

  appointmentBookDate: string;
  scheduleTimeFrom: string;
  scheduleTimeTo: string;
};

export type AppointmentResponse = {
  data: AppointmentItem[];
};
