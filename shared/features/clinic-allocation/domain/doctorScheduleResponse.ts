export type DoctorScheduleItem = {
  id: string;
  doctorId: string;
  doctorName: string;
  clinicId: string;
  clinicName: string;
  scheduleDate: string;
  scheduleTimeFrom: string;
  scheduleTimeTo: string;
  maxPatientCap: number;
  quotedFee: number;
  isApproved: boolean;
  cancellationReason: string;
};

export type DoctorScheduleResponse = {
  data: DoctorScheduleItem[];
};
