export interface TimeSlot {
  from: string;
  to: string;
  fee: number;
  isApproved: boolean;
}

export interface HospitalSchedule {
  date: string;
  times: TimeSlot[];
}

export interface HospitalScheduleResponse {
  data: HospitalSchedule[];
}
