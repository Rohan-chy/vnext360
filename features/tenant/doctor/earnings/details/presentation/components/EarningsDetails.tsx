'use client';

import { useState } from 'react';
import DataTable from '@/components/custom-components/table/data-table';
import { detailsColumns } from './detailsColumns';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { earningsDetailsData } from '../../application/utils/earningsDetailsData';

export default function EarningsDetails() {
  const [viewType, setViewType] = useState<'category' | 'date'>('date');

  const sortedData =
    viewType === 'category'
      ? [...earningsDetailsData].sort((a, b) =>
          a.category.localeCompare(b.category)
        )
      : [...earningsDetailsData].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold">Earnings Details</h2>
        <p className="text-gray-500 text-sm">
          Detailed earnings by patient services
        </p>
      </div>

      {/* Filter Tabs */}
      <Tabs
        value={viewType}
        onValueChange={(value) => setViewType(value as any)}
      >
        <TabsList>
          <TabsTrigger value="date">Date Wise</TabsTrigger>
          <TabsTrigger value="category">Category Wise</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Table */}
      <DataTable columns={detailsColumns} data={sortedData} />
    </div>
  );
}
