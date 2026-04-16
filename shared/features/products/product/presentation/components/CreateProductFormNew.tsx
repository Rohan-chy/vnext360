import { useState } from 'react';
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
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { useProductSubmit } from '../hooks/useProductSubmit';
import Tablist from '@/components/custom-components/Tablist';
import { FormTextArea } from '@/components/extended/form-textarea';
import { useGetHsCode } from '../../../hs-code/application/usecases/useGetHsCode';
import { optionsConverter } from '@/lib/optionsConverter';

const productTabs = [
  {
    title: 'Basic Info',
    value: 'basic',
  },
  {
    title: 'Category',
    value: 'category',
  },
  {
    title: 'Pricing',
    value: 'pricing',
  },
  {
    title: 'Inventory',
    value: 'inventory',
  },
  {
    title: 'Extra',
    value: 'extra',
  },
];

const steps = ['basic', 'category', 'pricing', 'inventory', 'extra'] as const;

const CreateProductFormNew = ({
  initialValues,
  onClose,
}: CreateProductFormProps) => {
  const form = useCreateProductForm(initialValues);
  const [currentStep, setCurrentStep] =
    useState<(typeof steps)[number]>('basic');

  const currentIndex = steps.indexOf(currentStep);

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

  const { data: hsCodes } = useGetHsCode();
  const hsCodeData = hsCodes?.data;

  const { onSubmit, loading } = useProductSubmit(onClose);

  //  step validation
  const handleNext = async () => {
    let fields: string[] = [];

    switch (currentStep) {
      case 'basic':
        fields = [
          'name',
          'productType',
          'currency',
          'sku',
          'upc',
          'ean',
          'hsCode',
        ];
        break;

      case 'category':
        fields = [
          'productCategoryId',
          'category',
          'subCategory',
          'brand',
          'manufacturer',
          'model',
          'attributes',
        ];
        break;

      case 'pricing':
        fields = ['basePrice', 'discount', 'bulkPrice', 'tax'];
        break;

      case 'inventory':
        fields = [
          'minimumOrderQuantity',
          'maximumOrderQuantity',
          'leadTimeInDays',
          'dimensionLWH',
          'netWeight',
          'grossWeight',
        ];
        break;

      case 'extra':
        fields = [
          'shortDescription',
          'longDescription',
          'targetAudience',
          'usecase',
          'contractTerms',
          'sustainabilityInfo',
        ];
        break;
    }

    const isValid = await form.trigger(fields);
    if (!isValid) return;

    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs value={currentStep} className="w-full">
              <Tablist tabData={productTabs} />

              {/* BASIC */}
              <TabsContent
                value="basic"
                className="grid grid-cols-2 gap-4 pt-4"
              >
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
                  name="variant"
                  label="Variant"
                />
                <FloatingLabelFormInput
                  form={form}
                  name="version"
                  label="Version"
                />
                <Combobox
                  items={
                    optionsConverter(
                      hsCodeData,
                      (d) => d.hsCode,
                      (d) => d.hsCode
                    ) || []
                  }
                  form={form}
                  name="hsCode"
                  label="Select HS Code"
                />
              </TabsContent>

              {/* CATEGORY */}
              <TabsContent value="category" className="pt-6 space-y-6">
                {/* SECTION 1: CATEGORY INFO */}
                <div className="rounded-xl border bg-muted/20 p-4">
                  <h3 className="text-sm font-semibold mb-4">
                    Product Classification
                  </h3>

                  <div className="grid grid-cols-3 gap-4">
                    <Combobox
                      items={optionItems(ProductCategory) || []}
                      form={form}
                      name="productCategoryId"
                      label="Product Category"
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
                </div>

                {/* SECTION 2: DYNAMIC ATTRIBUTES */}
                <div className="rounded-xl border bg-muted/20 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold">Specifications</h3>

                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => append({ attributeValueId: '' })}
                    >
                      + Add Specs
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {dynamicAttributeFields.length === 0 && (
                      <p className="text-xs text-muted-foreground">
                        No specifications added yet.
                      </p>
                    )}

                    {dynamicAttributeFields.map((field, index) => (
                      <div
                        key={field.id}
                        className="flex items-end gap-3 p-3 rounded-lg border bg-background"
                      >
                        <div className="flex-1">
                          <Combobox
                            form={form}
                            name={`dynamicAttributes.${index}.attributeValueId`}
                            label="Specification"
                            items={attributeValueOptions(productAttributeValue)}
                          />
                        </div>

                        <DeleteAlert onClick={() => remove(index)} />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* PRICING */}
              <TabsContent
                value="pricing"
                className="grid grid-cols-3 gap-4 pt-4"
              >
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
              </TabsContent>

              {/* INVENTORY */}
              <TabsContent
                value="inventory"
                className="grid grid-cols-3 gap-4 pt-4"
              >
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
                  label="Lead Time"
                />
                <FloatingLabelFormInput
                  form={form}
                  name="dimensionLWH"
                  label="Dimensions"
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
              </TabsContent>

              {/* EXTRA */}
              <TabsContent
                value="extra"
                className="grid grid-cols-2 gap-4 pt-4"
              >
                <FormTextArea
                  form={form}
                  name="shortDescription"
                  label="Short Description"
                />
                <FormTextArea
                  form={form}
                  name="longDescription"
                  label="Long Description"
                />
                <FormTextArea
                  form={form}
                  name="targetAudience"
                  label="Target Audience"
                />
                <FormTextArea form={form} name="usecase" label="Use Case" />
                <FormTextArea
                  form={form}
                  name="contractTerms"
                  label="Contract Terms"
                />
                <FormTextArea
                  form={form}
                  name="sustainabilityInfo"
                  label="Sustainability Info"
                />
                <FormTextArea
                  form={form}
                  name="returnOrWarrantyPolicy"
                  label="Return / Warranty Policy"
                />
              </TabsContent>
            </Tabs>

            {/* ACTION BUTTONS */}
            <div className="flex justify-between">
              <CustomButton
                type="button"
                variant="outline"
                disabled={currentIndex === 0}
                onClick={handleBack}
                size={'sm'}
              >
                Back
              </CustomButton>

              {currentIndex === steps.length - 1 ? (
                <CustomButton type="submit" disabled={loading} size={'sm'}>
                  {initialValues ? 'Update' : 'Submit'}
                </CustomButton>
              ) : (
                <Button type="button" onClick={handleNext} size={'sm'}>
                  Next
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateProductFormNew;
