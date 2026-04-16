import { Building, Calendar, CalendarCheck, MessageSquare } from 'lucide-react';
import { DataCardGrid } from './resuable/DataCardGrid';

interface Props {
  data: any[];
  admin?: boolean;
}

export function ExperienceTable({ data, admin }: Props) {
  return (
    <DataCardGrid
      title="Experience"
      data={data}
      showDocument={true}
      admin={admin}
      fields={[
        {
          label: 'Institute',
          key: 'instituteName',
          icon: <Building size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Join Date',
          key: 'joinDate',
          icon: <CalendarCheck size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Completion',
          key: 'completionDate',
          icon: <Calendar size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Remarks',
          key: 'remarks',
          icon: <MessageSquare size={14} className="text-muted-foreground" />,
        },
      ]}
    />
  );
}
