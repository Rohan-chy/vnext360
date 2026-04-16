export interface EarningsSummary {
  category: string;
  qty: number;
  amount: number;
  discount: number;
  tax: number;
  charges: number;
  netAmount: number;
}

export const summaryData: EarningsSummary[] = [
  {
    category: 'Consultation',
    qty: 15,
    amount: 1500,
    discount: 100,
    tax: 75,
    charges: 50,
    netAmount: 1425,
  },
  {
    category: 'Follow-up',
    qty: 10,
    amount: 800,
    discount: 50,
    tax: 40,
    charges: 20,
    netAmount: 770,
  },
  {
    category: 'Dental Cleaning',
    qty: 6,
    amount: 600,
    discount: 30,
    tax: 20,
    charges: 10,
    netAmount: 580,
  },
];
