'use client';

import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PaymentMethod } from '../../domain/paymentMethods.schema';
import { Combobox } from '@/components/custom-components/combobox';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';

interface AddPaymentMethodDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddOrUpdate: (data: PaymentMethod) => void;
  initialData?: PaymentMethod; // optional for edit
}

type FormValues = {
  cardType: string;
  cardNumber: string;
  cardHolderName: string;
  expiryDate?: string;
  billingAddress?: string;
};
const cardTypeOptions = [
  { label: 'Select', value: '' },
  { label: 'Visa', value: 'Visa' },
  { label: 'E-Sewa', value: 'E-Sewa' },
  { label: 'MasterCard', value: 'MasterCard' },
];
export const PaymentMethodFormDialog = ({
  open,
  onOpenChange,
  onAddOrUpdate,
  initialData,
}: AddPaymentMethodDialogProps) => {
  const form = useForm<FormValues>({
    defaultValues: {
      cardType: '',
      cardNumber: '',
      cardHolderName: '',
      expiryDate: '',
      billingAddress: '',
    },
  });

  const { reset, handleSubmit, formState } = form;

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const payload: PaymentMethod = {
      id: initialData?.id || Date.now().toString(),
      ...data,
    };
    onAddOrUpdate(payload);
    onOpenChange(false);
    reset();
  };

  const handleCancel = () => {
    reset(initialData || undefined);
    onOpenChange(false);
  };
  console.log(initialData);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="space-y-4">
        <DialogHeader>
          <DialogTitle>
            {initialData ? 'Edit Payment Method' : 'Add Payment Method'}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Card Type Combobox */}
            <Combobox
              form={form}
              name="cardType"
              label="Card Type"
              items={cardTypeOptions}
              isRequired
            />
            {formState.errors.cardType && (
              <p className="text-red-500 text-sm">
                {formState.errors.cardType.message}
              </p>
            )}

            {/* Card Number */}
            <FloatingLabelFormInput
              form={form}
              name="cardNumber"
              label="Card Number"
              isRequired
            />
            {formState.errors.cardNumber && (
              <p className="text-red-500 text-sm">
                {formState.errors.cardNumber.message}
              </p>
            )}

            {/* Card Holder Name */}
            <FloatingLabelFormInput
              form={form}
              name="cardHolderName"
              label="Card Holder Name"
              isRequired
            />
            {formState.errors.cardHolderName && (
              <p className="text-red-500 text-sm">
                {formState.errors.cardHolderName.message}
              </p>
            )}

            {/* Expiry Date */}
            <FloatingLabelFormInput
              form={form}
              name="expiryDate"
              label="Expiry Date"
            />

            {/* Billing Address */}
            <FloatingLabelFormInput
              form={form}
              name="billingAddress"
              label="Billing Address"
            />

            <DialogFooter className="flex justify-end gap-2">
              <Button type="submit" className="bg-blue-900">
                {initialData ? 'Update' : 'Save'}
              </Button>{' '}
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
