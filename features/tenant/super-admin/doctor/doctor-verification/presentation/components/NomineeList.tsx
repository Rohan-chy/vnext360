'use client';

import { User, Phone } from 'lucide-react';
import { DataCardGrid } from './resuable/DataCardGrid';

interface Nominee {
  id: string;
  name: string;
  relationship: string;
  contactNumber: string;
}

interface Props {
  data: Nominee[];
  admin?: boolean;
}

export function NomineeList({ data, admin }: Props) {
  return (
    <DataCardGrid
      title="Nominees"
      data={data}
      showDocument={false}
      admin={admin}
      fields={[
        {
          label: 'Name',
          icon: <User size={14} className="text-muted-foreground" />,
          key: 'name',
        },
        {
          label: 'Relationship',
          icon: <User size={14} className="text-muted-foreground" />,
          key: 'relationship',
        },
        {
          label: 'Contact Number',
          icon: <Phone size={14} className="text-muted-foreground" />,
          key: 'contactNumber',
        },
      ]}
    />
  );
}
