'use client';

import { CreditCard, DollarSign, Home, User } from 'lucide-react';
import { DataCardGrid } from './resuable/DataCardGrid';

interface Bank {
  id: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  accountType: string;
}

interface Props {
  data: Bank[];
  admin?: boolean;
}

export function BankDetailsCard({ data, admin }: Props) {
  return (
    <DataCardGrid
      title="Bank Details"
      data={data}
      showDocument={false} // no document preview
      admin={admin}
      fields={[
        {
          label: 'Bank Name',
          key: 'bankName',
          icon: <Home size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Account Name',
          key: 'accountName',
          icon: <User size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Account Number',
          key: 'accountNumber',
          icon: <CreditCard size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Account Type',
          key: 'accountType',
          icon: <DollarSign size={14} className="text-muted-foreground" />,
        },
      ]}
    />
  );
}
