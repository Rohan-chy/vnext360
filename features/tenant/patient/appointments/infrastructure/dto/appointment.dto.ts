export interface PatientAppointmentResponse {
  id: string;

  paymentOptions: number;
  paymentStatus: number;
  bookingStatus: number;

  fee: number;

  doctorClinicAllocationId: string;
  bookingDateTime: string;

  clinicName: string;
  doctorName: string;
  doctorSpeciality: string;

  baseAddress: string;
  url: string;

  patientName: string;

  date: string;
  timeFrom: string;
  timeTo: string;
}

export interface PatientAppointmentApiResponse {
  data: PatientAppointmentResponse[];
}
