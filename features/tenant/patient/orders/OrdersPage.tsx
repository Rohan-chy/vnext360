'use client';

import DataTable from '@/components/custom-components/table/data-table';
import { useState } from 'react';
import DatalistHeader from '@/components/custom-components/data-list-header';
import { OrderColumns } from './presentation/columns/OrderColumns';
import { Order } from './domain/order.schema';

const OrdersPage = () => {
  const [orders] = useState<Order[]>([
    {
      id: '1',
      date: '2026-03-05',
      item: 'Paracetamol 500mg',
      quantity: 2,
      rate: 2.5,
      discount: 0.5,
      taxes: 0.25,
      amount: 4.75,
      supplier: 'City Pharmacy',
    },
    {
      id: '2',
      date: '2026-03-06',
      item: 'Vitamin D3',
      quantity: 1,
      rate: 8.0,
      discount: 1.0,
      taxes: 0.5,
      amount: 7.5,
      supplier: 'HealthPlus Pharmacy',
    },
  ]);

  const handleView = (order: Order) => {
    console.log('View order:', order);
  };

  return (
    <>
      <DatalistHeader title="My Orders" />

      <DataTable columns={OrderColumns(handleView)} data={orders || []} />
    </>
  );
};

export default OrdersPage;
