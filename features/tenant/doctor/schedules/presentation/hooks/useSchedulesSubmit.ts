import { useApproveRejectSchedule } from '../../application/usecases/useApproveRejectSchedule';
import { useCreateDoctorSchedule } from '../../application/usecases/useCreateSchedules';
import { useUpdateDoctorSchedule } from '../../application/usecases/useUpdateSchedules';
import { ApproveRejectFormValues } from '../../domain/approveReject.schema';
import { DoctorScheduleFormData } from '../../domain/schedules.schema';

interface UseDoctorScheduleFormControllerProps {
  onSuccess?: () => void;
}

export const useDoctorScheduleSubmit = ({
  onSuccess,
}: UseDoctorScheduleFormControllerProps) => {
  //add
  const { mutate: createDoctorSchedule, isPending: createPending } =
    useCreateDoctorSchedule();

  //update
  const { mutate: updateDoctorSchedule, isPending: updatePending } =
    useUpdateDoctorSchedule();

  //approve/reject
  const { mutate: approveRejectSchedule, isPending: approveRejectPending } =
    useApproveRejectSchedule();

  const submitDoctorSchedule = (data: DoctorScheduleFormData) => {
    if (data.id) {
      // Update existing DoctorSchedule
      updateDoctorSchedule(data, { onSuccess });
    } else {
      // Create new DoctorSchedule
      createDoctorSchedule(data, { onSuccess });
    }
  };

  const handleApproveReject = (values: ApproveRejectFormValues) => {
    approveRejectSchedule(values, { onSuccess });
  };

  return {
    submitDoctorSchedule,
    handleApproveReject,
    loading: createPending || updatePending || approveRejectPending,
  };
};
