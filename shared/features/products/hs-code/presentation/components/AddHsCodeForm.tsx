import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { Combobox } from '@/components/custom-components/combobox';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { optionsConverter } from '@/lib/optionsConverter';
import { useHsCodeForm } from '../../domain/forms/useCreateHsCodeForm';
import { useAddHsCodeSubmit } from '../hooks/useAddHsCodeSubmit';
import { FormTextArea } from '@/components/extended/form-textarea';

const AddHsCodeForm = ({ initialValues, onClose }: any) => {
  const form = useHsCodeForm(initialValues);

  const { onSubmit, loading, productData } = useAddHsCodeSubmit(onClose);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 space-y-6">
          <Combobox
            form={form}
            items={
              optionsConverter(
                productData,
                (d) => d.name,
                (d) => d.productId
              ) || []
            }
            name="productId"
            label="Select Product"
          />
          <FloatingLabelFormInput form={form} name="hsCode" label="Hs Code" />
          <FloatingLabelFormInput
            form={form}
            type="date"
            name="activateDate"
            label="Activation Date"
          />

          <FormTextArea form={form} name="description" label="Description" />

          {initialValues?.id && (
            <FormCheckbox name="isActive" label="Active" form={form} />
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 pt-2">
          <CustomButton
            type="submit"
            size="sm"
            disabled={!form.formState.isValid || loading}
          >
            Save
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

export default AddHsCodeForm;
