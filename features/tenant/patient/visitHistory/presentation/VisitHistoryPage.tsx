'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarPlusIcon } from 'lucide-react';
import { VisitHistory } from '../domain/visit-history.schema';
import { VisitHistoryCard } from './components/VisitHistoryCard';
import { CustomButton } from '@/components/extended/extended-button';
import { H4 } from '@/components/custom-components/typography/H4';

const VisitHistoryPage = () => {
  const [visits] = useState<VisitHistory[]>([
    {
      id: '1',
      doctorName: 'Dr. Sarah Johnson',
      department: 'Cardiology',
      hospital: 'City Hospital',
      visitDate: '2026-03-01',
      diagnosis: 'High Blood Pressure',
      prescription: 'Amlodipine 5mg',
      status: 'Completed',
    },
    {
      id: '2',
      doctorName: 'Dr. Michael Brown',
      department: 'Dermatology',
      hospital: 'Green Valley Clinic',
      visitDate: '2026-03-10',
      status: 'Upcoming',
    },
    {
      id: '3',
      doctorName: 'Dr. Emily Carter',
      department: 'Neurology',
      hospital: 'Sunrise Medical Center',
      visitDate: '2026-02-14',
      diagnosis: 'Migraine',
      prescription: 'Sumatriptan',
      status: 'Completed',
    },
  ]);

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <H4>My Visit History</H4>

        <div className="absolute right-6 top-6">
          <CustomButton>
            <CalendarPlusIcon className="w-4 h-4" />
            Book Appointment
          </CustomButton>
        </div>
      </div>
      <div className="mt-8">
        <VisitHistoryCard visits={visits} />
      </div>
    </div>
  );
};

export default VisitHistoryPage;
