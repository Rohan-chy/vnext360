//rohan
import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { useCreateDocumentType } from '../../application/usecases/useCreateDocumentType';
import { DocumentTypeFormValues } from '../../domain/createDocumentType.schema';
import { useDocumentTypeForm } from '../../domain/useDocumentTypeForm';
import { Combobox } from '@/components/custom-components/combobox';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { usePutDocumentType } from '../../application/usecases/usePutDocumentType';
import { documentTypeItems } from '../../application/utils/documentTypeItems';

const CreateDocumentTypeForm = ({ initialValues, onClose }: any) => {
  const form = useDocumentTypeForm(initialValues);

  const { mutate: createDocumentType, isPending: createPending } =
    useCreateDocumentType();

  const { mutate: putDocumentType, isPending: patchPending } =
    usePutDocumentType();

  const onSubmit = (values: DocumentTypeFormValues) => {
    const payload = {
      ...values,
      documentType: Number(values?.documentType),
    };

    if ((payload as any).id) {
      putDocumentType(payload, {
        onSuccess: () => onClose?.(),
      });
    } else {
      createDocumentType(payload, {
        onSuccess: () => onClose?.(),
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <FloatingLabelFormInput form={form} name="name" label="Name" />
              <Combobox
                items={documentTypeItems || []}
                form={form}
                name="documentType"
                label="Document Type"
              />
              <FormCheckbox form={form} name="isActive" label="Active" />
            </div>

            <div className="flex justify-end gap-2">
              <CustomButton
                type="submit"
                disabled={createPending || patchPending}
                size="sm"
              >
                {initialValues ? 'Update' : 'Save'}
              </CustomButton>

              <CustomButton
                type="button"
                variant="outline"
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

export default CreateDocumentTypeForm;
