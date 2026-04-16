import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FormTextArea } from '@/components/extended/form-textarea';
import { useApproveRejectScheduleForm } from '../../domain/approveReject.schema';

const RejectScheduleForm = ({
  initialValues,
  handleApproveReject,
  loading,
}: any) => {
  const form = useApproveRejectScheduleForm(initialValues);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleApproveReject)}
        className="space-y-5"
      >
        <FormTextArea form={form} name="cancellationReason" label="Reason" />

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

export default RejectScheduleForm;
