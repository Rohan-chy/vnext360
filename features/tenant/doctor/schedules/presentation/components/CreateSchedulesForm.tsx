'use client';

import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import {
  DoctorScheduleFormData,
  useDoctorScheduleForm,
} from '../../domain/schedules.schema';
import { Combobox } from '@/components/custom-components/combobox';
import { useDoctorScheduleSubmit } from '../hooks/useSchedulesSubmit';
import { convertClinicsToItems } from '@/lib/clinicOptions';
import { useGetMyHospitals } from '../../../hospitals/my-hospitals/application/useGetMyHospitals';
import { FormCheckbox } from '@/components/extended/FormCheckbox';

interface DoctorScheduleFormProps {
  initialValues?: DoctorScheduleFormData;
  onClose?: () => void;
}

export default function CreateDoctorScheduleForm({
  initialValues,
  onClose,
}: DoctorScheduleFormProps) {
  const form = useDoctorScheduleForm(initialValues);

  const { data: myHospitals } = useGetMyHospitals();

  const { submitDoctorSchedule, loading } = useDoctorScheduleSubmit({
    onSuccess: onClose,
  });

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitDoctorSchedule)}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 space-y-6">
            <Combobox
              form={form}
              items={convertClinicsToItems(myHospitals?.data) || []}
              name="clinicId"
              labelField="clinicName"
              label="Clinic Name"
            />

            {/* Date */}
            <FloatingLabelFormInput
              form={form}
              name="scheduleDate"
              label="Schedule Date"
              type="date"
              isRequired
            />

            {/* From */}
            <FloatingLabelFormInput
              form={form}
              name="scheduleTimeFrom"
              label="From Time"
              type="time"
              isRequired
            />

            {/* To */}
            <FloatingLabelFormInput
              form={form}
              name="scheduleTimeTo"
              label="To Time"
              type="time"
              isRequired
            />

            {/* Max Patients */}
            <FloatingLabelFormInput
              form={form}
              name="maxPatientCap"
              label="Max Patients"
              type="number"
              isRequired
            />

            {/* Fee */}
            <FloatingLabelFormInput
              form={form}
              name="quotedFee"
              label="Consultation Fee"
              type="number"
              isRequired
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
              onClick={() => form.reset()}
            >
              Clear
            </CustomButton>
          </div>
        </form>
      </Form>
    </>
  );
}
