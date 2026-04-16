'use client';
import DataTable from '@/components/custom-components/table/data-table';
import { useGetAppointmentBook } from '../../application/useGetAppointmentBook';
import { useGetProfileOrganization } from '../../../profile/application/useGetProfileOrganization';
import { clinicAppointmentColumns } from '../appointmentBookColumn';
import { useState } from 'react';
import DatalistHeader from '@/components/custom-components/data-list-header';
import ToogleTableCalendarButton from './ToogleTableCalendarButton';
import AppointmentCalendar from './AppointmentCalendar';

const Appointmentbooks = () => {
  const [viewMode, setViewMode] = useState<'table' | 'calendar'>('table');

  const { data: profile } = useGetProfileOrganization();

  const { data: appointmentbook } = useGetAppointmentBook(profile?.clinicId);
  const appointmentbookData = appointmentbook?.data;

  return (
    <main>
      <div className="flex justify-between items-center mb-6">
        <DatalistHeader
          title="Appointments"
          description="View and manage all scheduled appointments."
        />
        <ToogleTableCalendarButton
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>
      {viewMode === 'calendar' ? (
        <AppointmentCalendar appointments={appointmentbookData} />
      ) : (
        <DataTable
          columns={clinicAppointmentColumns()}
          data={appointmentbookData || []}
        />
      )}
    </main>
  );
};

export default Appointmentbooks;
