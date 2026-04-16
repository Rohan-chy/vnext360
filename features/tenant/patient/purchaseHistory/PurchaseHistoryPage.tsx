'use client';

import DataTable from '@/components/custom-components/table/data-table';
import { useState } from 'react';
import { Purchase } from './domain/purchase.schema';
import { purchaseColumns } from './presentation/columns/PurchaseColumns';
import DatalistHeader from '@/components/custom-components/data-list-header';

const PurchaseHistoryPage = () => {
  const [purchases] = useState<Purchase[]>([
    {
      id: '1',
      orderId: 'ORD-1001',
      medicineName: 'Paracetamol 500mg',
      quantity: 2,
      price: 5.99,
      pharmacyName: 'City Pharmacy',
      purchaseDate: '2026-03-05',
      status: 'Delivered',
    },
    {
      id: '2',
      orderId: 'ORD-1002',
      medicineName: 'Vitamin D3',
      quantity: 1,
      price: 12.5,
      pharmacyName: 'HealthPlus Pharmacy',
      purchaseDate: '2026-03-06',
      status: 'Processing',
    },
  ]);

  const handleView = (purchase: Purchase) => {
    console.log('View purchase:', purchase);
  };

  return (
    <>
      <DatalistHeader title="Purchase History" />

      <DataTable columns={purchaseColumns(handleView)} data={purchases || []} />
    </>
  );
};

export default PurchaseHistoryPage;
