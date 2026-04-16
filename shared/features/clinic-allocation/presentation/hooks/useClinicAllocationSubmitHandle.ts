import { useApproveRejectAllocation } from '../../application/usecases/useApproveRejectAllocation';
import { useCreateClinicAllocation } from '../../application/usecases/useCreateClinicAllocation';
import { usePutClinicAllocation } from '../../application/usecases/usePutClinicAllocation';
import { ApproveRejectAllocationFormValues } from '../../domain/approveRejectAlloction.schema';
import { CreateClinicAllocationFormValues } from '../../domain/createClinicAllocation.schema';

export const useClinicAllocationHandle = (onClose?: () => void) => {
  //add
  const { mutate: createClinicAllocation, isPending: createPending } =
    useCreateClinicAllocation();

  //update
  const { mutate: putClinicAllocation, isPending: patchPending } =
    usePutClinicAllocation();

  //approve/reject
  const { mutate: approveRejectAllocation, isPending: approveRejectPending } =
    useApproveRejectAllocation();

  const onSubmit = (values: CreateClinicAllocationFormValues) => {
    if (values.id) {
      // If ID exists, it's an update
      putClinicAllocation(values, {
        onSuccess: () => onClose?.(),
      });
    } else {
      // If no ID, it's a create
      createClinicAllocation(values, {
        onSuccess: () => onClose?.(),
      });
    }
  };

  const handleApproveReject = (values: ApproveRejectAllocationFormValues) => {
    approveRejectAllocation(values, {
      onSuccess: () => onClose?.(),
    });
  };

  return {
    onSubmit,
    handleApproveReject,
    loading: createPending || patchPending || approveRejectPending,
  };
};
