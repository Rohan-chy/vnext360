import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import {
  CreateProductAttributeValueFormProps,
  useCreateProductAttributeValueForm,
} from '../../domain/createProductAttributeValue.schema';
import { useGetProductAttribute } from '../../../product-attribute/application/usecases/useGetProductAttribute';
import { convertAttributeToItems } from '../../application/utils/attributeOptions';
import { Combobox } from '@/components/custom-components/combobox';
import { useAttributeValueSubmitHandler } from '../hooks/useAttributeValueSubmitHandler';

const CreateProductAttributeValueForm = ({
  initialValues,
  onClose,
}: CreateProductAttributeValueFormProps) => {
  const form = useCreateProductAttributeValueForm(initialValues);

  const { data } = useGetProductAttribute();
  const attributes = data?.data;

  const { onSubmit, loading } = useAttributeValueSubmitHandler(onClose);

  return (
    <div className="flex justify-center ">
      <div className="w-full rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Combobox
              form={form}
              items={convertAttributeToItems(attributes) || []}
              name="productAttributeId"
              label="Product Attribute"
            />
            <FloatingLabelFormInput
              form={form}
              name="value"
              label="Product Attribute Value"
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
    </div>
  );
};

export default CreateProductAttributeValueForm;
