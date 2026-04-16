import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { Combobox } from '@/components/custom-components/combobox';
import {
  CreateProductCategoryFormProps,
  useCreateProductCategoryForm,
} from '../../domain/createProductCategory.schema';
import { convertProductCategoryToItems } from '../../application/utils/productCategoryOptions';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { useProductCategorySubmit } from '../hooks/useProductCategorySubmit';

const CreateProductCategoryForm = ({
  initialValues,
  onClose,
  ProductCategory,
}: CreateProductCategoryFormProps) => {
  const form = useCreateProductCategoryForm(initialValues);

  const { onSubmit, loading } = useProductCategorySubmit(onClose);

  return (
    <div className="flex justify-center">
      <div className="w-full rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FloatingLabelFormInput form={form} name="name" label="Category" />

            <FloatingLabelFormInput
              form={form}
              name="description"
              label="Description"
            />

            <Combobox
              items={convertProductCategoryToItems(ProductCategory) || []}
              form={form}
              name="categoryId"
              label="Parent Category"
            />

            {initialValues?.id && (
              <FormCheckbox name="isActive" label="Active" form={form} />
            )}
            {/* ---------- ACTIONS ---------- */}
            <div className="flex justify-end gap-2">
              <CustomButton type="submit" size="sm" disabled={loading}>
                {initialValues ? 'Update' : 'Save'}
              </CustomButton>

              <CustomButton
                type="button"
                size="sm"
                variant="outline"
                disabled={loading}
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

export default CreateProductCategoryForm;
