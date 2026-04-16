'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Calendar,
  CircleDollarSign,
  Clock,
  Hospital,
  Stethoscope,
  User,
} from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { StatusBadge } from '@/shared/components/StatusBadgeEnum';
import { bookingStatusMap } from '@/shared/constants/bookingStatusMap';
import { paymentStatusMap } from '@/shared/constants/paymentStatusMap';
import { formatTimeHourMinute } from '@/lib/date-time-formatter';
import { AppointmentItem } from '../../domain/appointmentBookResponse';

interface AppointmentDetailsCardProps {
  dialogOpen: boolean;
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
  selectedAppointment: AppointmentItem | null;
}

const AppointmentDetailsCard = ({
  dialogOpen,
  setDialogOpen,
  selectedAppointment,
}: AppointmentDetailsCardProps) => {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent
        className="
        sm:max-w-lg bg-white rounded-xl shadow-xl p-0 overflow-hidden
        [&>button]:text-white
        [&>button]:opacity-100
        [&>button:hover]:opacity-80"
      >
        {/* Header */}
        <div className="bg-primary px-6 py-4">
          <DialogTitle className="text-white text-lg font-semibold">
            Appointment Details
          </DialogTitle>
          <DialogDescription className="text-gray-200 text-sm">
            Complete appointment information
          </DialogDescription>
        </div>

        {selectedAppointment && (
          <div className="p-6 space-y-4 text-gray-700">
            {/* Patient */}
            <div className="flex items-center justify-between border-b pb-1">
              <div className="flex items-center gap-2 text-gray-500">
                <User className="w-4 h-4" />
                <span>Patient</span>
              </div>
              <span className="font-medium text-right">
                {selectedAppointment.patientName}
              </span>
            </div>

            {/* Doctor */}
            <div className="flex items-center justify-between border-b pb-1">
              <div className="flex items-center gap-2 text-gray-500">
                <Stethoscope className="w-4 h-4" />
                <span>Doctor</span>
              </div>
              <span className="font-medium text-right">
                {selectedAppointment.doctorName}
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center justify-between border-b pb-1">
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>Date</span>
              </div>
              <span className="font-medium text-right">
                {selectedAppointment.appointmentBookDate}
              </span>
            </div>

            {/* Time */}
            <div className="flex items-center justify-between border-b pb-1">
              <div className="flex items-center gap-2 text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Time</span>
              </div>
              <span className="font-medium text-right">
                {formatTimeHourMinute(selectedAppointment.scheduleTimeFrom)} -{' '}
                {formatTimeHourMinute(selectedAppointment.scheduleTimeTo)}
              </span>
            </div>

            {/* Fee */}
            <div className="flex items-center justify-between border-b pb-1">
              <div className="flex items-center gap-2 text-gray-500">
                <CircleDollarSign className="w-4 h-4" />
                <span>Consultation Fee</span>
              </div>
              <span className="font-semibold text-primary">
                Rs. {selectedAppointment.fee}
              </span>
            </div>

            {/* Booking Status */}
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Booking Status</span>
              <StatusBadge
                status={selectedAppointment.bookingStatus}
                statusMap={bookingStatusMap}
              />
            </div>

            {/* Payment Status */}
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Payment Status</span>
              <StatusBadge
                status={selectedAppointment.paymentStatus}
                statusMap={paymentStatusMap}
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <DialogFooter className="px-6 py-4 border-t bg-gray-50">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDetailsCard;
