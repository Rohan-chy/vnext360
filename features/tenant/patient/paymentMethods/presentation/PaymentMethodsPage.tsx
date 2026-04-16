'use client';

import React, { useState } from 'react';
import { PaymentMethod } from '../domain/paymentMethods.schema';
import { PaymentCards } from './components/PaymentCards';
import { Button } from '@/components/ui/button';
import { PaymentMethodFormDialog } from './components/PaymentMethodFormDialog';
import { CustomButton } from '@/components/extended/extended-button';

const PaymentMethodsPage = () => {
  // Mock data for demo
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '0',
      cardType: 'E-Sewa',
      cardNumber: '9812345678',
      cardHolderName: 'Alex Johnson',
    },
    {
      id: '1',
      cardType: 'Visa',
      cardNumber: '**** **** **** 4242',
      cardHolderName: 'John Doe',
      expiryDate: '12/25',
      billingAddress: '123 Main St, New York, NY',
    },
    {
      id: '2',
      cardType: 'MasterCard',
      cardNumber: '**** **** **** 5555',
      cardHolderName: 'Jane Smith',
      expiryDate: '11/24',
      billingAddress: '456 Elm St, San Francisco, CA',
    },
  ]);
  const [open, setOpen] = useState(false);
  const [editingCard, setEditingCard] = useState<PaymentMethod | null>(null);
  const handleAdd = () => {
    setEditingCard(null); // Add mode
    setOpen(true);
  };

  // Edit handler
  const handleEdit = (card: PaymentMethod) => {
    setEditingCard(card); // Edit mode
    setOpen(true);
  };

  // Delete handler
  const handleDelete = (id: string) => {
    console.log('Delete card id:', id);
    // Remove from state for demo
    setPaymentMethods((prev) => prev.filter((card) => card.id !== id));
  };

  const handleAddOrUpdate = (card: PaymentMethod) => {
    setPaymentMethods((prev) => {
      const index = prev.findIndex((c) => c.id === card.id);
      if (index > -1) {
        // Update existing
        const updated = [...prev];
        updated[index] = card;
        return updated;
      }
      // Add new
      return [...prev, card];
    });
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">My Payment Methods</h2>
        <div className="absolute right-6 top-6">
          <CustomButton onClick={handleAdd}>Add Payment Method</CustomButton>
        </div>
      </div>
      <div className="pt-6">
        <PaymentCards
          paymentMethods={paymentMethods}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
      {/* Dialog Component */}
      {open && (
        <PaymentMethodFormDialog
          open={open}
          onOpenChange={setOpen}
          initialData={editingCard || undefined}
          onAddOrUpdate={handleAddOrUpdate}
        />
      )}
    </div>
  );
};

export default PaymentMethodsPage;
