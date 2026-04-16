import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { useEffect } from 'react';
import { CustomButton } from '@/components/extended/extended-button';
import { useCreateSalutation } from '../../application/usecases/useCreateSalutation';
import { SalutationFormValues } from '../../domain/createSalutation.schema';
import { useSalutationForm } from '../../domain/useSalutationForm';
import { usePutSalutation } from '../../application/usecases/usePutSalutation';
import { FormTextArea } from '@/components/extended/form-textarea';

const CreateSalutationForm = ({ initialValues, onClose }: any) => {
  const form = useSalutationForm();

  const { mutate: createSalutation, isPending: createPending } =
    useCreateSalutation();

  const { mutate: putSalutation, isPending: patchPending } = usePutSalutation();

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
    }
  }, [initialValues, form]);

  const onSubmit = (values: SalutationFormValues) => {
    if ((values as any).id) {
      putSalutation(values, {
        onSuccess: () => onClose?.(),
      });
    } else {
      createSalutation(values, {
        onSuccess: () => onClose?.(),
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <FloatingLabelFormInput
                form={form}
                name="name"
                label="Salutation"
              />

              <FormTextArea
                form={form}
                name="description"
                label="Description"
              />
            </div>

            <div className="flex justify-end gap-2">
              <CustomButton
                type="submit"
                disabled={createPending || patchPending}
                size="sm"
              >
                {initialValues ? 'Update' : 'Add'}
              </CustomButton>

              <CustomButton
                type="button"
                variant="destructive"
                disabled={createPending || patchPending}
                size="sm"
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

export default CreateSalutationForm;
