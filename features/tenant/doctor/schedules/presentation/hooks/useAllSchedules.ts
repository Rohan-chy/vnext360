// import { useGetDoctorProfile } from '../../../profile/application/usecases/useGetDoctorProfile';
// import { useGetDoctorSchedule } from '../../application/usecases/useGetSchedules';
import { DoctorScheduleFormData } from '../../domain/schedules.schema';
import { useState } from 'react';

export const useAllDoctorSchedule = () => {
  // const { data: profile } = useGetDoctorProfile();
  // const { data } = useGetDoctorSchedule(profile?.id);
  // const DoctorSchedule = data?.data; // approved schedules

  const [open, setOpen] = useState(false);
  const [editingDoctorSchedule, setEditingDoctorSchedule] =
    useState<DoctorScheduleFormData | null>(null);

  const handleEdit = (DoctorSchedule: DoctorScheduleFormData) => {
    setEditingDoctorSchedule(DoctorSchedule);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingDoctorSchedule(null); // reset form for adding
    setOpen(true);
  };

  return {
    open,
    setOpen,
    editingDoctorSchedule,
    setEditingDoctorSchedule,
    handleEdit,
    handleAdd,
  };
};
