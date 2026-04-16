export type DoctorHospitalRequestResponse = {
  id: string;
  doctorId: string;
  doctorName: string;
  clinicId: string;
  clinicName: string;
  remarks: string;
  rejectionReason: string;
  joiningDate: string;
  designation: string;
  requestStatus: number;
};

export type DoctorHospitalRequestListResponse = {
  data: DoctorHospitalRequestResponse[];
};
