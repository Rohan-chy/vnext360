'use client';

import { User, Phone } from 'lucide-react';
import { DataCardGrid } from './resuable/DataCardGrid';

interface Relative {
  id: string;
  name: string;
  relation: string;
  contactNumber: string;
}

interface Props {
  data: Relative[];
  admin?: boolean;
}

export function RelativeList({ data, admin }: Props) {
  return (
    <DataCardGrid
      title="Relatives"
      data={data}
      showDocument={false} // no document section
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
