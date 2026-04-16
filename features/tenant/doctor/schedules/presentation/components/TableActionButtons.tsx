import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteDoctorSchedule } from '../../application/usecases/useDeleteSchedules';
import { DoctorScheduleFormData } from '../../domain/response.schema';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { Icons } from '@/shared/icons';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CustomButton } from '@/components/extended/extended-button';
import RejectScheduleForm from './RejectScheduleForm';
import { useState } from 'react';
import { useDoctorScheduleSubmit } from '../hooks/useSchedulesSubmit';

const TableActionButtons = ({
  data,
  handleEdit,
  source,
}: {
  data: DoctorScheduleFormData;
  handleEdit: (data: DoctorScheduleFormData) => void;
  source: string;
}) => {
  const { mutate: deleteClinicAllocation, isPending: deletePending } =
    useDeleteDoctorSchedule();

  const [open, setOpen] = useState(false);

  const onSuccess = () => {
    setOpen(false);
  };

  const { handleApproveReject, loading } = useDoctorScheduleSubmit({
    onSuccess,
  });

  const isRejected =
    data?.isApproved === false && !!data?.cancellationReason?.trim();

  return (
    <>
      {source == 'outgoing' ? (
        <TableUpdateDeleteActions
          data={data}
          onEdit={handleEdit}
          onDelete={(row) => deleteClinicAllocation({ id: String(row.id) })}
          disableActions={deletePending || isRejected || data?.isApproved}
          loading={deletePending}
        />
      ) : (
        //actions with received request
        <div className="flex gap-1">
          <AppTooltip content="Accept">
            <DeleteAlert
              action="accept"
              variant="outline"
              icon={Icons.Accept}
              tooltip="Accept"
              disabled={loading || isRejected || data?.isApproved}
              onClick={() =>
                handleApproveReject({
                  doctorClinicAllocationId: data?.id,
                  isApproved: true,
                  cancellationReason: '',
                })
              }
            />
          </AppTooltip>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <div>
                <AppTooltip content="Reject">
                  <CustomButton
                    type="button"
                    variant="destructive"
                    icon={<Icons.XCircle />}
                    className="h-6"
                    disabled={loading || isRejected || data?.isApproved}
                  />
                </AppTooltip>
              </div>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reject Schedule</DialogTitle>
              </DialogHeader>

              <RejectScheduleForm
                initialValues={data}
                handleApproveReject={handleApproveReject}
                loading={loading}
              />
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
};
export default TableActionButtons;
