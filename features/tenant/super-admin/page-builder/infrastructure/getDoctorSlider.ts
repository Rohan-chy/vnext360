import client from '@/core/network/httpClient';

export type DoctorSliderItem = {
  id: string;
  imageBaseAddress: string;
  imagePath: string;
  doctorName: string;
  doctorSpeciality: string;
  doctorSubSpeciality: string;
  academicDegree: string;
  yearsOfExperience: string;
  rating: number;
};

export type DoctorSliderResponse = {
  data: DoctorSliderItem[];
};

export const getDoctorSlider = async (): Promise<DoctorSliderResponse> => {
  return await client({
    url: 'v1/patient/doctor/slider',
    method: 'GET',
    isProtected: false,
  });
};
