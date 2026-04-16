export interface EarningsDetail {
  date: string;
  patient: string;
  items: string;
  category: string;
  qty: number;
  amount: number;
  discount: number;
  tax: number;
  charge: number;
  netAmount: number;
}

export const earningsDetailsData: EarningsDetail[] = [
  {
    date: '2026-03-05',
    patient: 'John Doe',
    items: 'General Consultation',
    category: 'Consultation',
    qty: 1,
    amount: 100,
    discount: 10,
    tax: 5,
    charge: 2,
    netAmount: 97,
  },
  {
    date: '2026-03-05',
    patient: 'Sarah Smith',
    items: 'Dental Cleaning',
    category: 'Dental',
    qty: 1,
    amount: 150,
    discount: 20,
    tax: 8,
    charge: 3,
    netAmount: 135,
  },
  {
    date: '2026-03-06',
    patient: 'Michael Brown',
    items: 'Follow-up Consultation',
    category: 'Consultation',
    qty: 1,
    amount: 80,
    discount: 5,
    tax: 4,
    charge: 2,
    netAmount: 77,
  },
];
