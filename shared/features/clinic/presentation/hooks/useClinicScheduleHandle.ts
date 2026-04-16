import { useCreateClinicSchedule } from '../../application/usecases/useCreateClinicSchedule';
import { useUpdateClinicSchedule } from '../../application/usecases/useUpdateClinicSchedule';
import { useDeleteClinicSchedule } from '../../application/usecases/useDeleteClinicSchedule';
import { useGetClinicById } from '../../application/usecases/useGetClinicById';
import React from 'react';
import { ClinicScheduleFormValues } from '../../domain/forms/ClinicScheduleForm';

export const useClinicScheduleHandle = (clinic: any) => {
  const [open, setOpen] = React.useState(false);

  const { mutateAsync: addClinicSchedule, isPending: creating } =
    useCreateClinicSchedule();
  const { mutateAsync: updateClinicSchedule, isPending: updating } =
    useUpdateClinicSchedule();
  const { mutateAsync: deleteSchedule, isPending: deleting } =
    useDeleteClinicSchedule();
  const { data: clinicDetails } = useGetClinicById(clinic?.id, open);

  const onSubmit = async (values: ClinicScheduleFormValues) => {
    try {
      const hasExisting = values.data.some((item) => item.id);

      if (hasExisting) {
        await updateClinicSchedule(values);
      } else {
        await addClinicSchedule(values);
      }

      setOpen(false);
    } catch (error) {
      console.error('Submit failed:', error);
    }
  };

  const removeScheduleFromBackend = async (id: string) => {
    if (!id) return;
    try {
      await deleteSchedule({ id });
    } catch (error) {
      console.error('Delete schedule failed:', error);
    }
  };

  return {
    open,
    setOpen,
    clinicDetails,
    onSubmit,
    removeScheduleFromBackend,
    loading: creating || updating || deleting,
  };
};
