'use client';

import Tablist from '@/components/custom-components/Tablist';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import DatalistHeader from '@/components/custom-components/data-list-header';
import AllDoctorsRequest from './AllDoctorsRequest';
import AllDoctorsApproval from './AllDoctorsApproval';
import { useGetDoctors } from '../../application/usecases/useGetDoctors';
import { GetDoctorsApiResponse } from '../../domain/getDoctors.schema';

const doctorRequestsTab = [
  { title: 'Pending', value: 'pending', icon: ArrowDownLeft },
  { title: 'Approved', value: 'approved', icon: ArrowUpRight },
];

const DoctorApprovalRequests = () => {
  const { data } = useGetDoctors() as { data?: GetDoctorsApiResponse };
  const doctors = data?.data || [];

  return (
    <main>
      <DatalistHeader
        title="Doctor Verification Requests"
        description="Track and manage incoming and outgoing doctor verification requests."
      />

      <Tabs defaultValue="pending" className="mt-2">
        <Tablist tabData={doctorRequestsTab} />

        <TabsContent value="pending">
          <AllDoctorsRequest doctors={doctors} />
        </TabsContent>

        <TabsContent value="approved">
          <AllDoctorsApproval doctors={doctors} />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default DoctorApprovalRequests;
