import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Combobox } from '@/components/custom-components/combobox';
import { Icons } from '@/shared/icons';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import { useClinicScheduleForm } from '../../domain/forms/ClinicScheduleForm';
import { useClinicScheduleHandle } from '../hooks/useClinicScheduleHandle';
import { Form } from '@/components/ui/form';
import { dayItems } from '@/lib/dayItems';
import { DeleteAlert } from '@/components/custom-components/delete-alert';

export const ClinicScheduleForm = ({ clinic }: any) => {
  const {
    open,
    setOpen,
    onSubmit,
    removeScheduleFromBackend,
    loading,
    clinicDetails,
  } = useClinicScheduleHandle(clinic);

  const form = useClinicScheduleForm(
    clinic?.id,
    clinicDetails,
    removeScheduleFromBackend
  );
  const { handleSubmit, formState, fields, addSchedule, removeSchedule } = form;

  const handleRemove = async (index: number) => {
    const item = form.getValues(`data.${index}`);
    if (item?.id) {
      await removeScheduleFromBackend(item.id);
    }
    removeSchedule(index);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <AppTooltip content="Add Clinic Schedule">
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="h-6">
            <Icons.Calendar />
          </Button>
        </DialogTrigger>
      </AppTooltip>

      <DialogContent className="max-w-2xl">
        <DialogHeader className="flex">
          <DialogTitle className="text-primary">Clinic Schedule</DialogTitle>
        </DialogHeader>

        {/* Add Button */}
        <div className="flex justify-end">
          <Button
            variant="outline"
            type="button"
            size={'sm'}
            onClick={addSchedule}
            disabled={fields.length > 6} // limit
          >
            + Add Schedule
          </Button>
        </div>

        <Form {...form}>
          <form
            className="space-y-4 max-h-[60vh] overflow-y-auto pr-1"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Schedule Rows */}
            <div className="space-y-3">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="border rounded-lg p-3 space-y-2 bg-muted/30"
                >
                  <div className="grid grid-cols-3 gap-2">
                    <Combobox
                      items={dayItems}
                      form={form}
                      name={`data.${index}.daysOfWeek`}
                      label="Day"
                    />

                    <FloatingLabelFormInput
                      form={form}
                      name={`data.${index}.startTime`}
                      label="Start"
                      type="time"
                    />

                    <FloatingLabelFormInput
                      form={form}
                      name={`data.${index}.endTime`}
                      label="End"
                      type="time"
                    />
                  </div>

                  {/* Remove Button */}
                  <div className="flex justify-end">
                    <DeleteAlert
                      onClick={() => handleRemove(index)}
                      icon={Icons.X}
                      disabled={fields.length == 1}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end gap-2 pt-2 border-t">
              <Button
                variant="outline"
                type="button"
                size={'sm'}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size={'sm'}
                disabled={!formState.isValid || loading}
              >
                {loading ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
