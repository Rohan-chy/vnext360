import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import {
  CreateProductFormProps,
  useCreateProductForm,
} from '../../domain/createProduct.schema';
import { Combobox } from '@/components/custom-components/combobox';
import { useGetProductCategory } from '../../../product-category/application/usecases/useGetProductCategory';
import { optionItems } from '../../application/utils/optionItems';
import { useFieldArray } from 'react-hook-form';
import { useGetProductAttributeValue } from '../../../product-attribute-value/application/usecases/useGetProductAttributeValue';
import { attributeValueOptions } from '../../application/utils/attributeValueOptions';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProductSubmit } from '../hooks/useProductSubmit';

const CreateProductForm = ({
  initialValues,
  onClose,
}: CreateProductFormProps) => {
  const form = useCreateProductForm(initialValues);

  const {
    fields: dynamicAttributeFields,
    append,
    remove,
  } = useFieldArray({
    control: form.control,
    name: 'dynamicAttributes',
  });

  const { data: category } = useGetProductCategory();
  const ProductCategory = category?.data;

  const { data: attributeValue } = useGetProductAttributeValue();
  const productAttributeValue = attributeValue?.data;

  const { onSubmit, loading } = useProductSubmit(onClose);

  return (
    <div className="flex justify-center">
      <div className="w-full rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs defaultValue="basic" className="w-full">
              {/* ---------------- TAB HEADER ---------------- */}
              <TabsList className="grid grid-cols-6 w-full">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="category">Category</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
                <TabsTrigger value="extra">Extra</TabsTrigger>
                <TabsTrigger value="attributes">Attributes</TabsTrigger>
              </TabsList>

              {/* ================= BASIC INFO ================= */}
              <TabsContent value="basic" className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <FloatingLabelFormInput
                    form={form}
                    name="name"
                    label="Product Name"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="productType"
                    label="Product Type"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="currency"
                    label="Currency"
                  />
                  <FloatingLabelFormInput form={form} name="sku" label="SKU" />
                  <FloatingLabelFormInput form={form} name="upc" label="UPC" />
                  <FloatingLabelFormInput form={form} name="ean" label="EAN" />
                  <FloatingLabelFormInput
                    form={form}
                    name="hsCode"
                    label="HS Code"
                  />
                </div>
              </TabsContent>

              {/* ================= CATEGORY ================= */}
              <TabsContent value="category" className="space-y-4 pt-4">
                <div className="grid grid-cols-3 gap-4">
                  <Combobox
                    items={optionItems(ProductCategory) || []}
                    form={form}
                    name="productCategoryId"
                    label="Product Category"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="category"
                    label="Category"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="subCategory"
                    label="Sub Category"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="brand"
                    label="Brand"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="manufacturer"
                    label="Manufacturer"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="model"
                    label="Model"
                  />
                </div>
              </TabsContent>

              {/* ================= PRICING ================= */}
              <TabsContent value="pricing" className="space-y-4 pt-4">
                <div className="grid grid-cols-3 gap-4">
                  <FloatingLabelFormInput
                    type="number"
                    form={form}
                    name="basePrice"
                    label="Base Price"
                  />
                  <FloatingLabelFormInput
                    type="number"
                    form={form}
                    name="discount"
                    label="Discount"
                  />
                  <FloatingLabelFormInput
                    type="number"
                    form={form}
                    name="bulkPrice"
                    label="Bulk Price"
                  />
                  <FloatingLabelFormInput
                    type="number"
                    form={form}
                    name="tax"
                    label="Tax"
                  />
                </div>
              </TabsContent>

              {/* ================= INVENTORY & SHIPPING ================= */}
              <TabsContent value="inventory" className="space-y-4 pt-4">
                <div className="grid grid-cols-3 gap-4">
                  <FloatingLabelFormInput
                    type="number"
                    form={form}
                    name="minimumOrderQuantity"
                    label="Min Order Qty"
                  />
                  <FloatingLabelFormInput
                    type="number"
                    form={form}
                    name="maximumOrderQuantity"
                    label="Max Order Qty"
                  />
                  <FloatingLabelFormInput
                    type="number"
                    form={form}
                    name="leadTimeInDays"
                    label="Lead Time (Days)"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="dimensionLWH"
                    label="Dimensions (L×W×H)"
                  />
                  <FloatingLabelFormInput
                    type="number"
                    form={form}
                    name="netWeight"
                    label="Net Weight"
                  />
                  <FloatingLabelFormInput
                    type="number"
                    form={form}
                    name="grossWeight"
                    label="Gross Weight"
                  />
                </div>
              </TabsContent>

              {/* ================= EXTRA ================= */}
              <TabsContent value="extra" className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <FloatingLabelFormInput
                    form={form}
                    name="shortDescription"
                    label="Short Description"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="longDescription"
                    label="Long Description"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="targetAudience"
                    label="Target Audience"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="usecase"
                    label="Use Case"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="contractTerms"
                    label="Contract Terms"
                  />
                  <FloatingLabelFormInput
                    form={form}
                    name="sustainabilityInfo"
                    label="Sustainability Info"
                  />
                </div>
              </TabsContent>

              {/* ================= DYNAMIC ATTRIBUTES ================= */}
              <TabsContent value="attributes" className="space-y-4 pt-4">
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="h-6"
                      onClick={() => append({ attributeValueId: '' })}
                    >
                      + Add
                    </Button>
                  </div>
                  {dynamicAttributeFields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <Combobox
                        form={form}
                        name={`dynamicAttributes.${index}.attributeValueId`}
                        label="Attribute Value"
                        items={attributeValueOptions(productAttributeValue)}
                      />
                      <DeleteAlert onClick={() => remove(index)} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* ---------------- ACTIONS ---------------- */}
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

export default CreateProductForm;
