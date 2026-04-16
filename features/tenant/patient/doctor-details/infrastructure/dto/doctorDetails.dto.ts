// ---- Time slot ----
export interface StartEndTime {
  doctorClinicAllocationId: string;
  startTime: string; // "12:00:00"
  endTime: string; // "12:30:00"
  quotedFee: number;
}

// ---- Schedule ----
export interface AllocationSchedule {
  date: string; // ISO string
  dayOfWeek: string; // "Wednesday"
  startEndTimes: StartEndTime[];
}

// ---- Clinic Allocation ----
export interface ClinicAllocation {
  clinicId: string;
  clinicName: string;
  location: string;
  contactNumber: string;
  baseAddress: string;
  imageUrl: string;
  allocationSchedules: AllocationSchedule[];
}

// ---- Doctor ----
export interface DoctorDetailResponse {
  id: string;

  title: string;
  firstName: string;
  middleName?: string;
  lastName: string;

  gender: number;

  dateOfBirth: string;
  dateOfBirthNp?: string;

  countryCode: string;
  contactNumber: string;

  email: string;

  imageBaseAddress: string;
  imagePath: string;

  clinicAllocations: ClinicAllocation[];

  categoryName: string;
  subCategoryName: string;
  briefBio: string;

  isVerified: boolean;
}
