import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useGetProductById } from '../application/usecases/useGetProductById';
import { Product } from './getProduct.schema';

/* ---------- Nested Schemas ---------- */

const UnitConversionSchema = z.object({
  secondaryQty: z.number().min(0),
  secondaryUnitId: z.string().min(1, 'Secondary unit is required'),
  primaryQty: z.number().min(0),
});

const DynamicAttributeSchema = z.object({
  attributeValueId: z.string().min(1, 'Specification is required'),
});

/* ---------- Main Product Schema ---------- */

export const ProductSchema = z.object({
  id: z.string().optional(),

  name: z.string().min(1, 'Name is required'),
  productType: z.string().min(1, 'Product type is required'),

  sku: z.string().min(1, 'SKU is required'),
  upc: z.string().optional(),
  ean: z.string().optional(),

  category: z.string().optional(),
  subCategory: z.string().optional(),
  brand: z.string().optional(),
  manufacturer: z.string().optional(),
  model: z.string().optional(),

  variant: z.string().optional(),
  version: z.string().optional(),

  shortDescription: z.string().optional(),
  longDescription: z.string().optional(),

  basePrice: z.number().min(0),
  discount: z.number().min(0),
  bulkPrice: z.number().min(0),
  tax: z.number().min(0),

  currency: z.string().min(1, 'Currency is required'),

  minimumOrderQuantity: z.number().min(0),
  maximumOrderQuantity: z.number().min(0),
  leadTimeInDays: z.number().min(0),

  dimensionLWH: z.string().optional(),
  netWeight: z.number().min(0),
  grossWeight: z.number().min(0),

  hsCode: z.string().optional(),

  returnOrWarrantyPolicy: z.string().optional(),

  targetAudience: z.string().optional(),
  usecase: z.string().optional(),
  contractTerms: z.string().optional(),
  sustainabilityInfo: z.string().optional(),

  productCategoryId: z.string().min(1, 'Category is required'),

  unitConversions: z.array(UnitConversionSchema).optional(),

  dynamicAttributes: z.array(DynamicAttributeSchema).optional(),
});

/* ---------- Types ---------- */

export type CreateProductFormValues = z.infer<typeof ProductSchema>;

/* ---------- Hook ---------- */

export const useCreateProductForm = (initialValues?: any) => {
  const form = useForm<CreateProductFormValues>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      id: '',
      name: '',
      productType: '',
      sku: '',
      upc: '',
      ean: '',

      category: '',
      subCategory: '',
      brand: '',
      manufacturer: '',
      model: '',
      variant: '',
      version: '',

      shortDescription: '',
      longDescription: '',

      basePrice: 0,
      discount: 0,
      bulkPrice: 0,
      tax: 0,

      currency: '',

      minimumOrderQuantity: 0,
      maximumOrderQuantity: 0,
      leadTimeInDays: 0,

      dimensionLWH: '',
      netWeight: 0,
      grossWeight: 0,

      hsCode: '',
      returnOrWarrantyPolicy: '',

      targetAudience: '',
      usecase: '',
      contractTerms: '',
      sustainabilityInfo: '',

      productCategoryId: '',

      unitConversions: [],

      dynamicAttributes: [{ attributeValueId: '' }],
    },
    mode: 'onSubmit',
  });

  const productId = initialValues?.productId;

  const { data: singleProduct } = useGetProductById(productId);

  useEffect(() => {
    if (productId && singleProduct) {
      form.reset(singleProduct);
    }
  }, [productId, singleProduct]);

  return form;
};

/* ---------- Props ---------- */

export interface CreateProductFormProps {
  initialValues?: Product;
  onClose?: () => void;
}
