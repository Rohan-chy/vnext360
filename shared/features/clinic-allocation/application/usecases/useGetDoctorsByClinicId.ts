'use client';
import { useQuery } from '@tanstack/react-query';
import { getDoctorsOfClinicByClinicId } from '../../infrastructure/getDoctorsByClinicId.repo';
import { GetDoctorsOfClincResponse } from '../../domain/doctorsOfClinicReponse';

export const useGetDoctorsByClinicId = (id?: string) => {
  return useQuery<GetDoctorsOfClincResponse>({
    queryKey: ['get-doctorsByClinicId', id],
    queryFn: () => getDoctorsOfClinicByClinicId(id as string),
    enabled: !!id,
  });
};
