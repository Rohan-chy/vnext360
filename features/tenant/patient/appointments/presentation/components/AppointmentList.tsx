'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { H4 } from '@/components/custom-components/typography/H4';
import { EmptyState } from './EmptyState';
import { useGetPatientAppointments } from '../../application/useCases/useGetPatientAppointments';
import { PatientAppointmentResponse } from '../../infrastructure/dto/appointment.dto';
import RescheduleAppointmentDialog from './RescheduleAppointmentDialog';
import { AppointmentCard } from './AppointmentCard';

type TabType = 0 | 1 | 2; // 0 = Past, 1 = Today, 2 = Upcoming

export default function AppointmentList() {
  const [selectedTab, setSelectedTab] = useState<TabType>(1); // Default: Today
  const [openReschedule, setOpenReschedule] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleRescheduleClick = (id: string) => {
    setSelectedId(id);
    setOpenReschedule(true);
  };

  // Fetch appointments for the currently selected tab
  const { data: PatientAppointments, isLoading } =
    useGetPatientAppointments(selectedTab);

  const appointments: PatientAppointmentResponse[] =
    PatientAppointments?.data || [];

  // Tab labels
  const tabs: { label: string; value: TabType }[] = [
    { label: 'Past', value: 0 },
    { label: 'Today', value: 1 },
    { label: 'Upcoming', value: 2 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <H4>Appointments</H4>
      </div>

      {/* Tabs */}
      <Tabs
        value={selectedTab.toString()}
        onValueChange={(value) => setSelectedTab(Number(value) as TabType)}
        className="w-full"
      >
        <TabsList className="flex gap-4 bg-transparent">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value.toString()}
              className="
                flex items-center gap-3 px-5 py-2 rounded-full border
                text-sm font-medium transition
                data-[state=active]:shadow-[0_4px_14px_rgba(0,153,102,0.5)]
                bg-white text-muted-foreground border-gray-300
                data-[state=active]:bg-primary
                data-[state=active]:text-white
              "
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tabs Content */}
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value.toString()}>
            <div className="grid grid-cols-1 gap-2 mt-4">
              {isLoading ? (
                <div>Loading...</div>
              ) : appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                  />
                ))
              ) : (
                <EmptyState
                  label={
                    tab.value === 0
                      ? 'No past appointments'
                      : tab.value === 1
                        ? 'No appointments today'
                        : 'No upcoming appointments'
                  }
                />
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Reschedule Dialog */}
      {selectedId && (
        <RescheduleAppointmentDialog
          open={openReschedule}
          onClose={() => setOpenReschedule(false)}
          appointmentId={selectedId}
          doctorClinicAllocationId="guid-1"
          currentFee={500}
          onSubmitReschedule={(data) => console.log(data)}
        />
      )}
    </div>
  );
}
