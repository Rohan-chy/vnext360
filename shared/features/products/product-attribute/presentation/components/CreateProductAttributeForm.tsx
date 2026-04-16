import { Form } from '@/components/ui/form';
import {
  CreateProductAttributeFormProps,
  useCreateClinicForm,
} from '../../domain/createProductAttribute.schema';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { useProductAttributeSubmit } from '../hooks/useProductAttributeSubmitHandler';

const CreateProductAttributeForm = ({
  initialValues,
  onClose,
}: CreateProductAttributeFormProps) => {
  const form = useCreateClinicForm(initialValues);

  const { onSubmit, loading } = useProductAttributeSubmit(onClose);

  return (
    <div className="w-full rounded-2xl border bg-background p-6 shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FloatingLabelFormInput
            form={form}
            name="name"
            label="Product Attribute"
          />

          <div className="flex justify-end gap-2">
            {/* SUBMIT BUTTON */}
            <CustomButton type="submit" disabled={loading} size={'sm'}>
              {initialValues ? 'Update' : 'Add'}
            </CustomButton>
            {/* CLEAR BUTTON */}
            <CustomButton
              type="button"
              variant={'outline'}
              disabled={loading}
              size={'sm'}
              onClick={() => form.reset(initialValues || undefined)}
            >
              Clear
            </CustomButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateProductAttributeForm;
