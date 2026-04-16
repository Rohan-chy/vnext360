'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { useGetProductById } from '../../application/usecases/useGetProductById';
import { Button } from '@/components/ui/button';
import { Icons } from '@/shared/icons';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import Tablist from '@/components/custom-components/Tablist';

const productDetailsTab = [
  {
    title: 'Category',
    value: 'category',
  },
  {
    title: 'Pricing',
    value: 'pricing',
  },
  {
    title: 'Stocks',
    value: 'stock',
  },
  {
    title: 'Dimensions',
    value: 'dimensions',
  },
  {
    title: 'Other',
    value: 'other',
  },
];
type Props = {
  data: any;
};

const ViewProductDetails = ({ data }: Props) => {
  const [open, setOpen] = useState(false);

  const { data: productData, isLoading } = useGetProductById(
    data?.productId,
    open
  );

  const imageBase = `http://${productData?.baseUrl}`;
  const altBase = `http://${productData?.alternateBaseUrl}`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/*  TRIGGER BUTTON */}
      <AppTooltip content="View Product Details">
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="h-6">
            <Icons.Eye className="w-3 h-3" />
          </Button>
        </DialogTrigger>
      </AppTooltip>

      <DialogContent className="!max-w-4xl w-full">
        <DialogHeader>
          <DialogTitle className="text-primary">Product Details</DialogTitle>
        </DialogHeader>

        {/* Loading State */}
        {isLoading && <p>Loading...</p>}

        {/* Content */}
        {productData && (
          <>
            <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2">
              {/* TOP SECTION */}
              <div className="grid grid-cols-2 gap-6">
                {/* LEFT - IMAGES */}
                <div className="space-y-4">
                  {productData?.imageUrl && (
                    <img
                      src={`${imageBase}${productData.imageUrl}`}
                      className="w-full h-70 object-cover rounded-lg border"
                    />
                  )}

                  {productData?.imageUrls?.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {productData.imageUrls.map((img: any) => (
                        <img
                          key={img.id}
                          src={`${altBase}${img.value}`}
                          className="h-20 w-full object-cover rounded-md border"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* RIGHT - BASIC */}
                <div className="space-y-3 text-sm">
                  <SectionTitle title="Basic Info" />
                  <Detail label="Name" value={productData.name} />
                  <Detail label="SKU" value={productData.sku} />
                  <Detail label="UPC" value={productData.upc} />
                  <Detail label="EAN" value={productData.ean} />
                  <Detail label="Brand" value={productData.brand} />
                  <Detail
                    label="Manufacturer"
                    value={productData.manufacturer}
                  />
                  <Detail label="Model" value={productData.model} />
                  <Detail label="Variant" value={productData.variant} />
                  <Detail label="Version" value={productData.version} />
                </div>
              </div>

              {/* TABS SECTION */}
              <Tabs defaultValue="category" className="w-full">
                <Tablist tabData={productDetailsTab} />

                {/* CATEGORY */}
                <TabsContent
                  value="category"
                  className="text-sm space-y-2 mt-4"
                >
                  <SectionTitle title="Category" />
                  <Detail label="Category" value={productData.category} />
                  <Detail
                    label="Sub Category"
                    value={productData.subCategory}
                  />

                  {productData?.dynamicAttributes?.length > 0 && (
                    <>
                      <SectionTitle title="Specifications" />
                      {productData.dynamicAttributes.map((attr: any) => (
                        <p key={attr.attributeValueId}>
                          <span className="font-medium text-muted-foreground">
                            {attr.attributeName}:
                          </span>{' '}
                          {attr.attributeValue}
                        </p>
                      ))}
                    </>
                  )}
                </TabsContent>

                {/* PRICING */}
                <TabsContent value="pricing" className="text-sm space-y-2 mt-4">
                  <SectionTitle title="Pricing" />
                  <Detail label="Base Price" value={productData.basePrice} />
                  <Detail label="Discount" value={productData.discount} />
                  <Detail label="Bulk Price" value={productData.bulkPrice} />
                  <Detail label="Tax" value={productData.tax} />
                  <Detail label="Currency" value={productData.currency} />
                </TabsContent>

                {/* ORDER INFO */}
                <TabsContent value="stock" className="text-sm space-y-2 mt-4">
                  <SectionTitle title="Stock Info" />
                  <Detail
                    label="Min Qty"
                    value={productData.minimumOrderQuantity}
                  />
                  <Detail
                    label="Max Qty"
                    value={productData.maximumOrderQuantity}
                  />
                  <Detail
                    label="Lead Time (days)"
                    value={productData.leadTimeInDays}
                  />
                </TabsContent>

                {/* DIMENSIONS */}
                <TabsContent
                  value="dimensions"
                  className="text-sm space-y-2 mt-4"
                >
                  <SectionTitle title="Dimensions & Weight" />
                  <Detail
                    label="Dimensions (LWH)"
                    value={productData.dimensionLWH}
                  />
                  <Detail label="Net Weight" value={productData.netWeight} />
                  <Detail
                    label="Gross Weight"
                    value={productData.grossWeight}
                  />
                </TabsContent>

                {/* OTHER */}
                <TabsContent value="other" className="text-sm space-y-4 mt-4">
                  <SectionTitle title="Other Info" />
                  <Detail label="HS Code" value={productData.hsCode} />
                  <Detail
                    label="Target Audience"
                    value={productData.targetAudience}
                  />
                  <Detail label="Use Case" value={productData.usecase} />
                  <Detail
                    label="Contract Terms"
                    value={productData.contractTerms}
                  />
                  <Detail
                    label="Sustainability"
                    value={productData.sustainabilityInfo}
                  />
                  <Detail
                    label="Return Or Warranty Policy"
                    value={productData.returnOrWarrantyPolicy}
                  />

                  <SectionTitle title="Description" />
                  <Detail label="Short" value={productData.shortDescription} />
                  <Detail label="Long" value={productData.longDescription} />
                </TabsContent>
              </Tabs>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ViewProductDetails;

const SectionTitle = ({ title }: { title: string }) => (
  <p className="font-semibold text-primary border-b pb-1">{title}</p>
);

const Detail = ({ label, value }: any) => {
  if (!value && value !== 0) return null;

  return (
    <p>
      <span className="font-medium text-muted-foreground">{label}:</span>{' '}
      {value}
    </p>
  );
};
