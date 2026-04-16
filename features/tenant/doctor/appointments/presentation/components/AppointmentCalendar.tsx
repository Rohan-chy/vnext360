'use client';

import { useState, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventClickArg } from '@fullcalendar/core';
import '@/shared/css/fullCalendar.css';
import { statusColorHexCode } from '@/shared/css/statusColors';
import AppointmentDetailsCard from './AppointmentDetailsCard';
import { AppointmentData } from '../../domain/appointmentResponse.schema';
import { formatTimeHourMinute } from '@/lib/date-time-formatter';

interface AppointmentCalendarProps {
  appointments: AppointmentData[];
}

export default function AppointmentCalendar({
  appointments,
}: AppointmentCalendarProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentData | null>(null);

  const events = useMemo(
    () =>
      appointments.map((a) => {
        const colors = statusColorHexCode[a.bookingStatus] || {
          bg: '#e5e7eb', // gray-100
          border: '#d1d5db', // gray-200
          text: '#374151', // gray-700
        };
        return {
          id: a.id,
          title: `${a.patientName} - ${a.doctorSpeciality}`,
          start: `${a.date}T${a.timeFrom}`,
          end: `${a.date}T${a.timeTo}`,
          backgroundColor: colors.bg,
          borderColor: colors.border,
          textColor: colors.text,
          extendedProps: { ...a },
        };
      }),
    [appointments]
  );

  const handleEventClick = (clickInfo: EventClickArg) => {
    const appointment = appointments.find((a) => a.id === clickInfo.event.id);
    if (appointment) {
      setSelectedAppointment(appointment);
      setDialogOpen(true);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events}
        eventClick={handleEventClick}
        slotDuration="00:15:00"
        slotLabelInterval="00:15:00"
        height="auto"
        eventDisplay="block"
        slotMinTime="08:00:00"
        slotMaxTime="18:00:00"
        displayEventTime={false}
        dayMaxEventRows={3}
        eventContent={(eventInfo) => {
          const { patientName, timeFrom, timeTo } =
            eventInfo.event.extendedProps;

          return (
            <div style={{ fontSize: '12px', lineHeight: '1.2' }}>
              <div style={{ fontWeight: 600 }}>
                {formatTimeHourMinute(timeFrom)} -{' '}
                {formatTimeHourMinute(timeTo)}
              </div>
              <div>{patientName}</div>
            </div>
          );
        }}
      />

      <AppointmentDetailsCard
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        selectedAppointment={selectedAppointment}
      />
    </div>
  );
}
