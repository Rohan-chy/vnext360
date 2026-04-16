import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { Icons } from '@/shared/icons';
import { useDeleteClinicAllocation } from '../../application/usecases/useDeleteClinicAllocation';
import { DoctorScheduleItem } from '../../domain/doctorScheduleResponse';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import RejectAllocationForm from './RejectAllocationForm';
import { useState } from 'react';
import { CustomButton } from '@/components/extended/extended-button';
import { useClinicAllocationHandle } from '../hooks/useClinicAllocationSubmitHandle';

const TableActionButtons = ({
  data,
  handleEdit,
  source,
}: {
  data: DoctorScheduleItem;
  handleEdit: (data: DoctorScheduleItem) => void;
  source: string;
}) => {
  const { mutate: deleteClinicAllocation, isPending: deletePending } =
    useDeleteClinicAllocation();

  const [open, setOpen] = useState(false);

  const onSuccess = () => {
    setOpen(false);
  };

  const { handleApproveReject, loading } = useClinicAllocationHandle(onSuccess);

  const isRejected =
    data?.isApproved === false && !!data?.cancellationReason?.trim();

  return (
    <>
      {source == 'outgoing' ? (
        <TableUpdateDeleteActions
          data={data}
          onEdit={handleEdit}
          onDelete={(row) => deleteClinicAllocation({ id: String(row.id) })}
          disableActions={deletePending || data?.isApproved || isRejected}
          loading={deletePending}
        />
      ) : (
        <div className="flex gap-1">
          <AppTooltip content="Accept">
            <DeleteAlert
              action="accept"
              variant="outline"
              icon={Icons.Accept}
              tooltip="Accept"
              disabled={loading || data?.isApproved || isRejected}
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
                    disabled={data?.isApproved || isRejected}
                  />
                </AppTooltip>
              </div>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reject Schedule</DialogTitle>
              </DialogHeader>

              <RejectAllocationForm
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
