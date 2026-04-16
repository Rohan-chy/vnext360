import { Form } from '@/components/ui/form';
import {
  CreateClinicAllocationFormProps,
  useCreateClinicForm,
} from '../../domain/createClinicAllocation.schema';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { Combobox } from '@/components/custom-components/combobox';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { useGetProfileOrganization } from '@/features/tenant/organization/profile/application/useGetProfileOrganization';
import { useGetDoctorsByClinicId } from '../../application/usecases/useGetDoctorsByClinicId';
import { useClinicAllocationHandle } from '../hooks/useClinicAllocationSubmitHandle';
import { optionsConverter } from '@/lib/optionsConverter';

const CreateClinicAllocationForm = ({
  initialValues,
  onClose,
}: CreateClinicAllocationFormProps) => {
  const { data: clinicProfile } = useGetProfileOrganization();

  const form = useCreateClinicForm(initialValues, clinicProfile);

  const { onSubmit, loading } = useClinicAllocationHandle(onClose);

  const { data: doctorData } = useGetDoctorsByClinicId(clinicProfile?.clinicId);
  const doctors = doctorData?.data;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 space-y-6">
          <Combobox
            form={form}
            items={
              optionsConverter(
                doctors,
                (d) => d.doctorName,
                (d) => d.doctorId
              ) || []
            }
            name="doctorId"
            labelField="doctorName"
            label="Doctor Name"
          />
          <FloatingLabelFormInput
            form={form}
            type="date"
            name="scheduleDate"
            label="Schedule Date"
          />
          <FloatingLabelFormInput
            form={form}
            type="time"
            name="scheduleTimeFrom"
            label="Time From"
          />

          <FloatingLabelFormInput
            form={form}
            type="time"
            name="scheduleTimeTo"
            label="Time To"
            className="w-3/4"
          />
          <FloatingLabelFormInput
            form={form}
            type="number"
            name="maxPatientCap"
            label="Max.Patient"
            className="w-1/4"
          />
          <FloatingLabelFormInput
            form={form}
            type="number"
            name="quotedFee"
            label="Fee"
            className="w-1/4"
          />

          {/* {initialValues?.id && (
            <FormCheckbox name="isApproved" label="Approved" form={form} />
          )} */}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 pt-2">
          <CustomButton
            type="submit"
            size="sm"
            disabled={!form.formState.isValid || loading}
          >
            Save Schedule
          </CustomButton>

          <CustomButton
            type="button"
            variant="outline"
            size="sm"
            onClick={() => form.reset(initialValues || undefined)}
          >
            Clear
          </CustomButton>
        </div>
      </form>
    </Form>
  );
};

export default CreateClinicAllocationForm;
