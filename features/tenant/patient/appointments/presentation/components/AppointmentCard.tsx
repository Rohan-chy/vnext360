import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { Clock, Mail, Phone, Eye, MessageCircle, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { P } from '@/components/custom-components/typography/P';
import { BookingStatus } from '@/shared/enums/enumData';
import {
  getBookingStatusLabel,
  getPaymentOptionLabel,
  getPaymentStatusLabel,
} from '@/shared/optionsData/statusOptions';
import { PatientAppointmentResponse } from '../../infrastructure/dto/appointment.dto';

/* ---------------- STATUS STYLES ---------------- */
const statusStyles: Record<number, string> = {
  0: 'bg-green-100 text-green-700', // Confirmed
  1: 'bg-red-100 text-red-700', // Cancelled
  2: 'bg-yellow-100 text-yellow-700', // Rescheduled
  3: 'bg-blue-100 text-blue-700', // Completed
};

const paymentStatusStyles: Record<number, string> = {
  1: 'bg-yellow-100 text-yellow-700', // Pending
  2: 'bg-green-100 text-green-700', // Completed
  3: 'bg-red-100 text-red-700', // Failed
  4: 'bg-purple-100 text-purple-700', // Refunded
};

export const AppointmentCard = ({
  appointment,
}: {
  appointment: PatientAppointmentResponse;
}) => {
  const avatarUrl =
    appointment?.baseAddress && appointment?.url
      ? `http://${appointment.baseAddress}${appointment.url}`
      : '';

  const startDateTime = new Date(`${appointment.date}T${appointment.timeFrom}`);
  const now = new Date();

  const isPast =
    appointment.bookingStatus === BookingStatus.Completed ||
    startDateTime < now;
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
      <CardContent className="flex items-center justify-between p-4 gap-4">
        {/* LEFT */}
        <div className="flex items-center gap-4 min-w-62.5">
          <Avatar className="h-14 w-14 rounded-xl">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>
              {appointment.doctorName.slice(0, 2)}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <p className="text-sm text-primary font-medium">
              #{appointment.doctorSpeciality}
            </p>

            <h3 className="font-semibold text-base">
              {appointment.doctorName}
            </h3>

            {/* Booking Status */}
            <Badge
              variant="secondary"
              className={cn(
                'text-xs capitalize',
                statusStyles[appointment.bookingStatus]
              )}
            >
              {getBookingStatusLabel(appointment.bookingStatus)}
            </Badge>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="flex text-sm items-center gap-6 flex-1 justify-center">
          <div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <P>
                {appointment.date} | {appointment.timeFrom} -{' '}
                {appointment.timeTo}
              </P>
            </div>
            <P>General Visit | Video Call</P>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <P>Payment Status : </P>
              <Badge
                variant="outline"
                className={cn(
                  'text-xs ml-2',
                  paymentStatusStyles[appointment.paymentStatus]
                )}
              >
                {getPaymentStatusLabel(appointment.paymentStatus)}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <P>Payment Mode : </P>
              <Badge variant="outline" className="text-xs ml-2">
                {getPaymentOptionLabel(appointment.paymentOptions)}
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <span>Fee : Rs.{appointment.fee}</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Eye size={16} />
          </Button>

          <Button variant="ghost" size="icon">
            <MessageCircle size={16} />
          </Button>

          <Button variant="ghost" size="icon">
            <X size={16} />
          </Button>

          {!isPast && appointment.bookingStatus === BookingStatus.Confirmed && (
            <Button className="rounded-full px-5">Attend</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
