import {
  BookingStatus,
  PaymentOptions,
  PaymentStatus,
} from '../enums/enumData';

export const getBookingStatusLabel = (status: BookingStatus): string => {
  switch (status) {
    case BookingStatus.Confirmed:
      return 'Confirmed';
    case BookingStatus.Cancelled:
      return 'Cancelled';
    case BookingStatus.Rescheduled:
      return 'Rescheduled';
    case BookingStatus.Completed:
      return 'Completed';
    default:
      return 'Unknown';
  }
};

export const getPaymentStatusLabel = (status: PaymentStatus): string => {
  switch (status) {
    case PaymentStatus.Pending:
      return 'Pending';
    case PaymentStatus.Completed:
      return 'Paid';
    case PaymentStatus.Failed:
      return 'Failed';
    case PaymentStatus.Refunded:
      return 'Refunded';
    default:
      return 'Unknown';
  }
};

export const getPaymentOptionLabel = (option: PaymentOptions): string => {
  switch (option) {
    case PaymentOptions.CashOnDelivery:
      return 'Cash';
    case PaymentOptions.Prepaid:
      return 'Prepaid';
    default:
      return 'Unknown';
  }
};

export const getPaymentStatusMeta = (status: PaymentStatus) => {
  switch (status) {
    case PaymentStatus.Pending:
      return { label: 'Pending', variant: 'warning' };

    case PaymentStatus.Completed:
      return { label: 'Paid', variant: 'success' };

    case PaymentStatus.Failed:
      return { label: 'Failed', variant: 'destructive' };

    case PaymentStatus.Refunded:
      return { label: 'Refunded', variant: 'secondary' };

    default:
      return { label: 'Unknown', variant: 'default' };
  }
};
