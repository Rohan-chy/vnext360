export interface Receipt {
  id: string;
  accountNumber: string;
  dateISO: string; // yyyy-mm-dd
  amount: number;
  remarks?: string;
}

export const receiptsData: Receipt[] = [
  {
    id: 'R-1001',
    accountNumber: 'AC-123456',
    dateISO: '2026-03-01',
    amount: 1500,
    remarks: 'Consultation Fee',
  },
  {
    id: 'R-1002',
    accountNumber: 'AC-123456',
    dateISO: '2026-03-02',
    amount: 2000,
    remarks: 'Lab Test Payment',
  },
  {
    id: 'R-1003',
    accountNumber: 'AC-789012',
    dateISO: '2026-03-03',
    amount: 500,
    remarks: 'Follow-up Fee',
  },
  {
    id: 'R-1004',
    accountNumber: 'AC-789012',
    dateISO: '2026-03-04',
    amount: 1200,
    remarks: 'X-ray Payment',
  },
];
