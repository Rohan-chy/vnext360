'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DoctorDetailResponse } from '../../infrastructure/dto/doctorDetails.dto';
import { DoctorProfileSection } from './DoctorProfileSection';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Combobox2 } from '@/components/custom-components/combobox2';
import { Form } from '@/components/ui/form';
import { P } from '@/components/custom-components/typography/P';
import { H4 } from '@/components/custom-components/typography/H4';
import { H3 } from '@/components/custom-components/typography/H3';
import { useGetPatientDetails } from '../../../profile/application/usecases/useGetPatientDetails';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

/* ---------------- TYPES ---------------- */
type TimeSlot = {
  time: string;
  fromTime: string;
  toTime: string;
  fee: number;
  allocationId: string;
  date: string;
};

type ClinicGroup = {
  clinicId: string;
  clinicName: string;
  dates: {
    date: string;
    dayOfWeek: string;
    slots: TimeSlot[];
  }[];
};

/* ---------------- HELPERS ---------------- */
const formatTime = (time: string) => {
  const [hour, minute] = time.split(':');
  const h = Number(hour);
  const suffix = h >= 12 ? 'PM' : 'AM';
  const formattedHour = h % 12 === 0 ? 12 : h % 12;

  return `${formattedHour}:${minute} ${suffix}`;
};

/* ---------------- COMPONENT ---------------- */
export default function DoctorHeader({
  doctorDetails,
}: {
  doctorDetails: DoctorDetailResponse;
}) {
  const router = useRouter();
  const { data: patientProfileData } = useGetPatientDetails();

  /* ---------------- FORM ---------------- */
  const form = useForm({
    defaultValues: {
      clinicId: '',
    },
  });
  // console.log(doctorDetails.clinicAllocations);
  // [
  //   {
  //     clinicId: 'db3a43ce-36b2-4e6d-9eb2-95b08dda13e5',
  //     clinicName: 'Nobel',
  //     allocationSchedules: [
  //       {
  //         date: '2026-03-20T00:00:00',
  //         dayOfWeek: 'Friday',
  //         startEndTimes: [
  //           {
  //             doctorClinicAllocationId: 'bb44f2bd-fbf5-4e1c-9e47-c49aecd243bc',
  //             startTime: '00:00:00',
  //             endTime: '12:30:00',
  //             quotedFee: 500,
  //           },
  //         ],
  //       },
  //       {
  //         date: '2026-03-22T00:00:00',
  //         dayOfWeek: 'Sunday',
  //         startEndTimes: [
  //           {
  //             doctorClinicAllocationId: 'a55d2f69-ff8b-438e-9a62-2851deeb5ee3',
  //             startTime: '10:00:00',
  //             endTime: '10:30:00',
  //             quotedFee: 500,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     clinicId: '70e389ef-ac20-47f6-b479-c944b23159ff',
  //     clinicName: 'Koshi',
  //     allocationSchedules: [
  //       {
  //         date: '2026-03-20T00:00:00',
  //         dayOfWeek: 'Friday',
  //         startEndTimes: [
  //           {
  //             doctorClinicAllocationId: '2ccbb20c-1ee5-4015-b7bf-a4cc1b14e5b1',
  //             startTime: '14:30:00',
  //             endTime: '15:00:00',
  //             quotedFee: 1500,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  const [showProfileModal, setShowProfileModal] = useState(false);

  /* ---------------- NAVIGATION ---------------- */
  const handleSlotClick = (slot: TimeSlot) => {
    if (patientProfileData?.id === '00000000-0000-0000-0000-000000000000') {
      setShowProfileModal(true);
      return;
    }
    const formattedDate = slot.date.split('T')[0];

    // Format time to 12-hour format
    const [hour, minute] = slot.time.split(':');
    const h = Number(hour);
    const formattedHour = h % 12 === 0 ? 12 : h % 12;
    const suffix = h >= 12 ? 'PM' : 'AM';
    const formattedTime = `${formattedHour}:${minute} ${suffix}`;

    router.push(
      `/client/doctors/${doctorDetails.id}/booking?clinicId=${selectedClinic?.clinicId}&clinicName=${selectedClinic?.clinicName}&fee=${slot?.fee}&date=${formattedDate}&time=${encodeURIComponent(
        formattedTime
      )}&allocationId=${slot.allocationId}`
    );
  };

  const transformedClinics = useMemo(() => {
    return (
      doctorDetails?.clinicAllocations?.map((clinic) => ({
        clinicId: clinic.clinicId,
        clinicName: clinic.clinicName,
        dates: clinic.allocationSchedules.map((schedule) => ({
          date: schedule.date,
          dayOfWeek: schedule.dayOfWeek,
          slots: schedule.startEndTimes.map((slot) => ({
            time: slot.startTime,
            fromTime: slot.startTime,
            toTime: slot.endTime,
            fee: slot.quotedFee,
            allocationId: slot.doctorClinicAllocationId,
            date: schedule.date,
          })),
        })),
      })) || []
    );
  }, [doctorDetails]);

  // console.log(transformedClinics);

  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  /* ---------------- SYNC FORM → STATE ---------------- */
  const selectedClinicId = form.watch('clinicId');
  const selectedClinic = transformedClinics.find(
    (c) => c.clinicId === selectedClinicId
  );
  const selectedDate = selectedClinic?.dates[selectedDateIndex];

  useEffect(() => {
    if (!transformedClinics.length) return;

    const firstClinicId = transformedClinics[0].clinicId;

    if (!form.getValues('clinicId')) {
      form.setValue('clinicId', firstClinicId);
      setSelectedDateIndex(0);
    }
  }, [transformedClinics, form]); // ✅ ALWAYS same structure

  /* ---------------- OPTIONS ---------------- */
  const clinicOptions = transformedClinics.map((clinic) => ({
    label: clinic.clinicName,
    value: clinic.clinicId,
  }));

  return (
    <div className="grid grid-cols-3 gap-2">
      <Dialog open={showProfileModal} onOpenChange={setShowProfileModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Profile</DialogTitle>
            <DialogDescription>
              Please complete basic info of your profile to book an appointment.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => router.push('/patient/profile')}>
            Go to Profile
          </Button>
        </DialogContent>
      </Dialog>
      {/* Profile Section */}
      <DoctorProfileSection doctorDetails={doctorDetails} />

      {/* do we have any shadcn
        component that we can use to achive this ui then use that */}

      {/* display slots based on clinic Section */}
      <Card className="p-4 rounded-2xl shadow-md space-y-2">
        {/* clinic selection */}
        {/* -------- Clinic Tabs -------- */}
        <H3>Book Appointments</H3>
        <H4>{selectedClinic?.clinicName}</H4>
        <Form {...form}>
          <Combobox2
            items={clinicOptions}
            name="clinicId"
            form={form}
            label="Select Clinic"
          />
        </Form>
        {/* if more than one date then user must be able to slide it horizontally  */}
        {/* -------- Date Slider -------- */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {selectedClinic?.dates.map((dateItem, index) => {
            const formattedDate = new Date(dateItem.date);

            return (
              <div
                key={index}
                onClick={() => setSelectedDateIndex(index)}
                className={`min-w-30 cursor-pointer rounded-xl border p-2 text-center ${
                  index === selectedDateIndex
                    ? 'bg-[#224994] text-white'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm font-medium">
                  {dateItem.dayOfWeek.slice(0, 3)}
                </p>
                <p className="text-xs">
                  {formattedDate.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-xs">{dateItem.slots.length} slots</p>
              </div>
            );
          })}
        </div>
        {/* once selected display clinic name, date and date ( sun,Mar 20 (1 slot available) ) */}
        {/* -------- Slots -------- */}
        <div className="flex flex-wrap gap-2">
          {selectedDate?.slots?.length ? (
            selectedDate.slots.map((slot) => {
              return (
                <Button
                  key={slot.allocationId}
                  variant="outline"
                  onClick={() => handleSlotClick(slot)}
                  className="flex flex-col items-center gap-1 px-3 h-14"
                >
                  {/* {formatTime(slot.time)} */}
                  <span>
                    {formatTime(slot.fromTime)} - {formatTime(slot.toTime)}
                  </span>
                  <P>NPR.( {slot?.fee} )</P>
                </Button>
              );
            })
          ) : (
            <p className="text-sm text-muted-foreground">
              {selectedClinic ? 'No slots available' : 'Please select a clinic'}
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}
