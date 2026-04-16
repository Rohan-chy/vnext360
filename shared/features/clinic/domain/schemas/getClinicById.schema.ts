export type ClinicResponseById = {
  id: string;
  name: string;
  location: string;
  type: string;
  pan: string;
  contactNo: string;
  manager: string;
  registrationNumber: string;
  registrationDate: string;
  baseAddress: string;
  imageUrl: string | null;
  clinicImages: clinicImage[];

  doctors: Doctor[];
  reviews: Review[];
  timings: Timing[];
};

export type clinicImage = {
  id: string;
  imageUrl: string;
};

export type Doctor = {
  id: string;
  name: string;
  contactNo: string;
  baseAddress: string;
  imageUrl: string | null;
};

export type Review = {
  id: string;
  name: string;
  review: string;
  rating: number;
  baseAddress: string;
  imageUrl: string | null;
};

export type Timing = {
  id: string;
  daysOfWeek: number;
  startTime: string;
  endTime: string;
};
