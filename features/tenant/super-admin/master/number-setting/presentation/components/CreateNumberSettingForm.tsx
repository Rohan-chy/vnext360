import { Form } from '@/components/ui/form';
import {
  CreateNumberSettingFormProps,
  CreateNumberSettingFormValues,
  useCreateNumberSettingForm,
} from '../../domain/createNumberSetting.schema';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { useEffect } from 'react';
import { useCreateNumberSetting } from '../../application/usecases/useCreateNumberSetting';
import { usePatchNumberSetting } from '../../application/usecases/usePatchNumberSetting';
import { format } from 'date-fns';
import { CustomButton } from '@/components/extended/extended-button';

const CreateNumberSettingForm = ({
  initialValues,
  onClose,
}: CreateNumberSettingFormProps) => {
  const form = useCreateNumberSettingForm();
  const { mutate: createNumberSetting, isPending: createPending } =
    useCreateNumberSetting();
  const { mutate: patchNumberSetting, isPending: patchPending } =
    usePatchNumberSetting();

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
    }
  }, [initialValues, form]);

  const onSubmit = (values: CreateNumberSettingFormValues) => {
    if (values.id) {
      // If ID exists, it's an update
      patchNumberSetting(values, {
        onSuccess: () => onClose?.(),
      });
    } else {
      // If no ID, it's a create
      createNumberSetting(values, {
        onSuccess: () => onClose?.(),
      });
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="w-full max-w-3xl rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
              <FloatingLabelFormInput
                form={form}
                name="prefix"
                label="Prefix"
              />
              <FloatingLabelFormInput
                type="number"
                form={form}
                name="startingNumber"
                label="Starting Number"
              />
              <FloatingLabelFormInput
                type="number"
                form={form}
                name="currentNumber"
                label="Current Number"
              />
              <FloatingLabelFormInput
                form={form}
                name="suffix"
                label="Suffix"
              />
            </div>

            <div className="flex justify-end gap-2">
              <CustomButton
                type="submit"
                disabled={createPending || patchPending}
                size={'sm'}
              >
                {initialValues ? 'Update' : 'Add'}
              </CustomButton>

              <CustomButton
                type="button"
                variant={'destructive'}
                disabled={createPending || patchPending}
                size={'sm'}
                onClick={() => form.reset(initialValues || undefined)}
              >
                Clear
              </CustomButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateNumberSettingForm;
