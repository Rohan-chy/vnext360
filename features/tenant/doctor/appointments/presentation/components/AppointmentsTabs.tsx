'use client';
import { useState } from 'react';
import { Tabs } from '@/components/ui/tabs';
import DataTable from '@/components/custom-components/table/data-table';
import AppointmentCalendar from './AppointmentCalendar';
import { doctorAppointmentColumns } from '../columns/doctorAppointmentColumns';
import ToogleTableCalendarButton from './ToogleTableCalendarButton';
import Tablist from '@/components/custom-components/Tablist';
import DatalistHeader from '@/components/custom-components/data-list-header';
import { useGetDoctorAppointment } from '../../application/usecases/useGetDoctorAppointment';
import { AppointmentDate } from '@/shared/enums/enumData';

const tabData = [
  { value: 0, title: 'Past' },
  { value: 1, title: 'Today' },
  { value: 2, title: 'Upcoming' },
];

export default function AppointmentsTable() {
  const [activeTab, setActiveTab] = useState<AppointmentDate>(
    AppointmentDate.Today
  );

  const [viewMode, setViewMode] = useState<'table' | 'calendar'>('table');

  const { data: appointments } = useGetDoctorAppointment(activeTab);
  const appointmentsData = appointments?.data || [];

  return (
    <div className="">
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
        <AppointmentCalendar appointments={appointmentsData} />
      ) : (
        <>
          <Tabs
            value={String(activeTab)}
            onValueChange={(value) =>
              setActiveTab(Number(value) as AppointmentDate)
            }
            className="mb-4"
          >
            <Tablist
              tabData={tabData.map((tab) => ({
                ...tab,
                value: String(tab.value),
              }))}
            />
          </Tabs>
          <DataTable
            columns={doctorAppointmentColumns()}
            data={appointmentsData || []}
          />
        </>
      )}
    </div>
  );
}
