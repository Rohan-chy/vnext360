import { useUpdateOutgoingRequest } from '../../application/usecases/updateOutgoingRequest';
import { useAddOutgoingRequest } from '../../application/usecases/useAddOutgoingRequest';
import { useApplyOutgoingRequest } from '../../application/usecases/useApplyOutgoingRequest';
import { useCancelOutgoingRequest } from '../../application/usecases/useCancelOutgoingRequest';
import {
  outgoingRequestSchema,
  outgoingRequestSchemaFormValues,
  updateOutgoingRequestSchema,
  updateOutgoingRequestSchemaFormValues,
} from '../../domain/outgoingRequest.schema';
import { useUpdateIncomingRequest } from '../../application/usecases/useUpdateIncomingRequest';
import { DoctorHospitalRequestResponse } from '../../domain/doctorHospitalResponse';

export const useRequestSubmit = (onClose?: () => void) => {
  const { mutateAsync: addOutgoingRequest, isPending } =
    useAddOutgoingRequest();
  const { mutateAsync: updateOutgoingRequest, isPending: updatePending } =
    useUpdateOutgoingRequest();
  const { mutateAsync: cancelOutgoingRequest, isPending: cancelPending } =
    useCancelOutgoingRequest();
  const { mutateAsync: applyOutgoingRequest, isPending: applyPending } =
    useApplyOutgoingRequest();
  //incoming request handle(postponed,reject,accept)
  const {
    mutateAsync: updateIncomingRequest,
    isPending: updateIncomingPending,
  } = useUpdateIncomingRequest();

  const onSubmit = async (
    values:
      | outgoingRequestSchemaFormValues
      | updateOutgoingRequestSchemaFormValues
  ) => {
    try {
      if ('id' in values && values.id) {
        const payload = {
          ...values,
          id: values.id!, // ensure id exists
          requestStatus: 0, //request(0) status
        };

        // Validate against update schema
        const parsedValues = updateOutgoingRequestSchema.parse(payload);
        await updateOutgoingRequest(parsedValues);
      } else {
        // Validate against create schema
        const parsedValues = outgoingRequestSchema.parse(values);
        await addOutgoingRequest(parsedValues);
      }

      onClose?.();
    } catch (error) {
      console.error('Failed to submit hospital request:', error);
    }
  };

  const updateStatus = async (
    data: DoctorHospitalRequestResponse,
    status: number
  ) => {
    try {
      const payload = {
        ...data,
        id: data.id!, // ensure id exists
        requestStatus: status,
      };

      // const parsedValues = updateOutgoingRequestSchema.parse(payload);

      await updateIncomingRequest(payload);
    } catch (error) {
      console.error('Failed to update request status:', error);
    }
  };

  return {
    onSubmit,
    cancelOutgoingRequest,
    applyOutgoingRequest,
    updateStatus,
    loading:
      isPending ||
      updatePending ||
      cancelPending ||
      applyPending ||
      updateIncomingPending,
  };
};
