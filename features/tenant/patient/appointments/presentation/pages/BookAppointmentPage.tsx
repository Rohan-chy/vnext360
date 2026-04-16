'use client';

import { useSearchParams, useParams, useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useBookAppointment } from '../../application/useCases/useBookAppointment';
import {
  BookingStatus,
  PaymentOptions,
  PaymentStatus,
} from '@/shared/enums/enumData';
import { Calendar, Clock, MapPin, CreditCard } from 'lucide-react';

/* ---------------- COMPONENT ---------------- */
export default function BookingPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  /* ----------- PATH PARAM ----------- */
  const doctorId = params.id as string;

  /* ----------- QUERY PARAMS ----------- */
  const clinicId = searchParams.get('clinicId') || '';
  const fee = searchParams.get('fee') || '';
  const clinicName = searchParams.get('clinicName') || '';
  const date = searchParams.get('date');
  const time = searchParams.get('time') || '';
  const allocationId = searchParams.get('allocationId') || '';

  /* ----------- STATE ----------- */
  const [paymentOption, setPaymentOption] = useState<PaymentOptions>(
    PaymentOptions.Prepaid
  );
  const [loading, setLoading] = useState(false);
  const { mutate: bookAppointment } = useBookAppointment();

  /* ----------- HANDLER ----------- */
  const handleBooking = async () => {
    setLoading(true);

    const payload = {
      paymentOptions: paymentOption,
      paymentStatus:
        paymentOption === PaymentOptions.Prepaid
          ? PaymentStatus.Completed
          : PaymentStatus.Pending,
      bookingStatus: BookingStatus.Confirmed,
      doctorClinicAllocationId: allocationId,
      fee: fee,
    };

    // console.log('BOOKING PAYLOAD:', payload);

    try {
      // Redirect after success
      bookAppointment(payload);
      router.push('/patient/appointments');
    } catch (error) {
      console.error('Booking failed', error);
    } finally {
      setLoading(false);
    }
  };

  /* ----------- UI ----------- */
  return (
    <div className="max-w-xl mx-auto p-4 space-y-2">
      {/* Heading */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">
          Review & Confirm Your Booking
        </h1>
        <p className="text-sm text-muted-foreground">
          Please verify your appointment details before confirming
        </p>
      </div>

      {/* Slot Summary */}
      <Card className="p-4 rounded-2xl border shadow-sm space-y-2">
        <h2 className="font-medium text-lg">Selected Slot</h2>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              Clinic
            </div>
            <span className="font-medium">{clinicName}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar size={16} />
              Date
            </div>
            <span className="font-medium">{date}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock size={16} />
              Time
            </div>
            <span className="font-medium">{time}</span>
          </div>

          <div className="flex items-center justify-between border-t pt-3">
            <span className="text-muted-foreground">Consultation Fee</span>
            <span className="text-lg font-semibold text-primary">
              Rs. {fee}
            </span>
          </div>
        </div>
      </Card>

      {/* Payment Options */}
      <Card className="p-4 rounded-2xl border shadow-sm">
        <h2 className="font-medium text-lg flex items-center gap-2">
          <CreditCard size={18} />
          Payment Method
        </h2>

        <div className="grid grid-cols-2 gap-3">
          <div
            onClick={() => setPaymentOption(PaymentOptions.Prepaid)}
            className={`cursor-pointer rounded-xl border p-4 transition-all
        ${
          paymentOption === PaymentOptions.Prepaid
            ? 'border-primary bg-primary/5'
            : 'hover:border-primary/50'
        }`}
          >
            <p className="font-medium">Pay Online</p>
            <p className="text-xs text-muted-foreground">Esewa / Khalti</p>
          </div>

          <div
            onClick={() => setPaymentOption(PaymentOptions.CashOnDelivery)}
            className={`cursor-pointer rounded-xl border p-4 transition-all
        ${
          paymentOption === PaymentOptions.CashOnDelivery
            ? 'border-primary bg-primary/5'
            : 'hover:border-primary/50'
        }`}
          >
            <p className="font-medium">Pay at Clinic</p>
            <p className="text-xs text-muted-foreground">
              Cash after consultation
            </p>
          </div>
        </div>
      </Card>

      {/* Confirm Button */}
      <Button
        className="w-full h-12 text-lg rounded-xl shadow-md hover:scale-[1.02] transition-transform"
        onClick={handleBooking}
        disabled={loading}
      >
        {loading ? 'Booking...' : 'Confirm Booking'}
      </Button>
    </div>
  );
}
