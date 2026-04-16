export type AppointmentData = {
  id: string;
  paymentOptions: number;
  paymentStatus: number;
  bookingStatus: number;
  fee: number;
  doctorClinicAllocationId: string;
  clinicName: string;
  patientName: string;
  doctorSpeciality: string;
  date: string;
  timeFrom: string;
  timeTo: string;
};

export type GetAppointmentResponse = {
  data: AppointmentData[];
};
