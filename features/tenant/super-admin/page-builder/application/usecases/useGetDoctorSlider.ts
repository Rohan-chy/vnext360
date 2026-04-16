'use client';
import { useQuery } from '@tanstack/react-query';
import { getDoctorSlider } from '../../infrastructure/getDoctorSlider';

export const useGetDoctorSlider = () => {
  return useQuery({
    queryKey: ['get-doctor-slider'],
    queryFn: () => getDoctorSlider(),
  });
};
