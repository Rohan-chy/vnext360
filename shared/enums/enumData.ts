export enum doctorOrganizationRequestStatus {
  Request = 0,
  Cancel = 1,
  Postphoned = 2,
  Accepted = 3,
  Rejected = 4,
}

export enum BookingStatus {
  Confirmed = 0,
  Cancelled = 1,
  Rescheduled = 2,
  Completed = 3,
}

export enum PaymentStatus {
  Pending = 1,
  Completed = 2,
  Failed = 3,
  Refunded = 4,
}

export enum PaymentOptions {
  CashOnDelivery = 1,
  Prepaid = 2,
}

export enum AppointmentDate {
  Past = 0,
  Today = 1,
  Upcoming = 2,
}

export enum DaysOfWeekEnum {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export enum DocumentType {
  education = 0,
  experience = 1,
  training = 2,
  research = 3,
}
