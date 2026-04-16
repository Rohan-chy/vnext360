'use client';

import { useState } from 'react';
import DataTable from '@/components/custom-components/table/data-table';
import { summaryColumns } from './summaryColumns';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { summaryData } from '../../application/utils/earningsSummaryData';

export default function EarningsSummary() {
  const [tab, setTab] = useState<'daily' | 'overall'>('daily');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold">Earnings Summary</h2>
        <p className="text-gray-500 text-sm">
          Overview of earnings by service category
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={tab} onValueChange={(value) => setTab(value as any)}>
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="overall">Overall</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Table */}
      <DataTable columns={summaryColumns} data={summaryData} />
    </div>
  );
}
